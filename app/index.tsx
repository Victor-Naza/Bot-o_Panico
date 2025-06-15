import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, Alert, Linking } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as Location from "expo-location";
import { useRouter } from "expo-router";
import botaoPanicoStyles from "./styles/indexStyles";

const BotaoPanico = () => {
  const [contato, setContato] = useState<string | null>(null);
  const [mensagem, setMensagem] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const carregarDados = async () => {
      const contatoSalvo = await AsyncStorage.getItem("contato");
      const mensagemSalva = await AsyncStorage.getItem("mensagem");

      const numeroLimpo = contatoSalvo ? contatoSalvo.replace(/\D/g, "") : null;

      setContato(numeroLimpo);
      setMensagem(mensagemSalva || "Preciso de ajuda! Estou em perigo!");
    };

    carregarDados();
  }, []);

  const handlePress = async () => {
    if (!contato) {
      Alert.alert("Erro", "Configure um número de contato primeiro.");
      return;
    }

    let locationText = "";
    try {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        Alert.alert(
          "Permissão negada",
          "Não foi possível acessar a localização."
        );
        return;
      }

      const location = await Location.getCurrentPositionAsync({});
      const { latitude, longitude } = location.coords;
      locationText = `Minha localização: https://www.google.com/maps?q=${latitude},${longitude}`;
    } catch (err) {
      locationText = "Não foi possível obter a localização.";
    }

    const mensagemFinal = `${mensagem}\n${locationText}`;

    // Tenta primeiro pelo esquema nativo
    let url = `whatsapp://send?phone=${contato}&text=${encodeURIComponent(mensagemFinal)}`;

    let supported = await Linking.canOpenURL(url);

    if (!supported) {
      // Se não funcionar, tenta o link web
      url = `https://wa.me/${contato}?text=${encodeURIComponent(mensagemFinal)}`;
      supported = await Linking.canOpenURL(url);
    }

    if (supported) {
      Linking.openURL(url);
    } else {
      Alert.alert("Erro", "Não foi possível abrir o WhatsApp.");
    }
  };

  return (
    <View style={botaoPanicoStyles.container}>
      <TouchableOpacity
        style={botaoPanicoStyles.configButton}
        onPress={() => router.push("/configuracao")}
        activeOpacity={0.7}
      >
        <Text style={botaoPanicoStyles.configButtonText}>⚙️ Configurações</Text>
      </TouchableOpacity>

      <Text style={botaoPanicoStyles.title}>Botão de Pânico</Text>

      <TouchableOpacity
        style={botaoPanicoStyles.alertButton}
        onPress={handlePress}
        activeOpacity={0.8}
      >
        <Text style={botaoPanicoStyles.alertButtonText}>🚨 ALERTA 🚨</Text>
      </TouchableOpacity>
    </View>
  );
};

export default BotaoPanico;