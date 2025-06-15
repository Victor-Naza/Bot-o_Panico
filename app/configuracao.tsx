import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Alert, ScrollView, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRouter } from "expo-router";
import configuracaoStyles from "./styles/configuracaoStyles";

const Configuracao = () => {
  const [contato, setContato] = useState('');
  const [mensagem, setMensagem] = useState('');
  const router = useRouter();

  useEffect(() => {
    const carregarDados = async () => {
      const contatoSalvo = await AsyncStorage.getItem('contato');
      const mensagemSalva = await AsyncStorage.getItem('mensagem');

      if (contatoSalvo) setContato(contatoSalvo);
      if (mensagemSalva) setMensagem(mensagemSalva);
    };

    carregarDados();
  }, []);

  const salvarEVoltar = async () => {
    try {
      await AsyncStorage.setItem('contato', contato);
      await AsyncStorage.setItem('mensagem', mensagem);
      Alert.alert('Sucesso', 'Configurações salvas!');
      router.push('/');
    } catch (e) {
      Alert.alert('Erro', 'Não foi possível salvar.');
    }
  };

  const mensagensPreProgramadas = [
    "Socorro! Preciso de ajuda imediata!",
    "Estou em perigo, venha rápido!",
    "Chame a polícia, é emergência!",
  ];

  return (
    <ScrollView contentContainerStyle={configuracaoStyles.container}>
      <Text style={configuracaoStyles.label}>Número do contato (ex: 5583988887777)</Text>
      <TextInput
        style={configuracaoStyles.input}
        keyboardType="phone-pad"
        value={contato}
        onChangeText={setContato}
        placeholder="Digite o número do contato"
        placeholderTextColor="#aaa"
      />

      <Text style={configuracaoStyles.label}>Mensagem de socorro</Text>
      <TextInput
        style={[configuracaoStyles.input, configuracaoStyles.textArea]}
        multiline
        value={mensagem}
        onChangeText={setMensagem}
        placeholder="Digite sua mensagem"
        placeholderTextColor="#aaa"
      />

      <Text style={configuracaoStyles.subTitle}>Mensagens pré-programadas</Text>
      <View style={configuracaoStyles.preProgramadasContainer}>
        {mensagensPreProgramadas.map((msg, idx) => (
          <TouchableOpacity 
            key={idx} 
            style={configuracaoStyles.preProgramadaButton} 
            onPress={() => setMensagem(msg)}
            activeOpacity={0.7}
          >
            <Text style={configuracaoStyles.preProgramadaText}>{msg}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={configuracaoStyles.buttonsContainer}>
        <TouchableOpacity 
          style={configuracaoStyles.botaoPrincipal} 
          onPress={salvarEVoltar} 
          activeOpacity={0.8}
        >
          <Text style={configuracaoStyles.botaoPrincipalTexto}>Salvar e Voltar</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Configuracao;