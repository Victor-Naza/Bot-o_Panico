import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

const Cadastro = () => {
    const [nome, setNome] = useState("");
    const [telefone, setTelefone] = useState("");

    const handleRegister = async () => {
        if (nome && telefone) {
            try {
                await fetch("http://localhost:3000/api/cadastro", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ nome, telefone }),
                });
                alert("Cadastro realizado com sucesso!");
            } catch (error) {
                console.error("Erro ao cadastrar:", error);
            }
        } else {
            alert("Por favor, preencha todos os campos.");
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Cadastro</Text>
            <TextInput
                style={styles.input}
                placeholder="Nome"
                value={nome}
                onChangeText={setNome}
            />
            <TextInput
                style={styles.input}
                placeholder="Telefone"
                value={telefone}
                onChangeText={setTelefone}
                keyboardType="phone-pad"
            />
            <Button title="Cadastrar" onPress={handleRegister} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        justifyContent: "center",
        alignItems: "center",
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 20,
    },
    input: {
        width: "80%",
        height: 40,
        borderColor: "#ccc",
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 10,
        paddingHorizontal: 10,
    },
});

export default Cadastro;