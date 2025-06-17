import { StyleSheet } from "react-native";

const configuracaoStyles = StyleSheet.create({
  container: {
    padding: 25,
    backgroundColor: "#f2f6fc", // mesmo fundo do botaoPanico
    flexGrow: 1,
  },
  label: {
    fontWeight: "700",
    fontSize: 16,
    marginBottom: 8,
    color: "#333", // mesma cor do título
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    padding: 12,
    fontSize: 16,
    backgroundColor: "#fafafa",
    marginBottom: 20,
  },
  textArea: {
    height: 100,
    textAlignVertical: "top",
  },
  subTitle: {
    fontWeight: "700",
    fontSize: 18,
    marginBottom: 12,
    color: "#333", // mesma cor do label/titulo
  },
  preProgramadasContainer: {
    marginBottom: 30,
  },
  preProgramadaButton: {
    backgroundColor: "#778899", // cor roxa do botão config
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 20,
    marginVertical: 5,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  preProgramadaText: {
    fontSize: 15,
    color: "#fff", // texto branco para contraste no botão roxo
  },
  contatoRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  contatoInput: {
    flex: 1,
    marginRight: 10,
  },
  contatoItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#fafafa",
    padding: 12,
    borderRadius: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#ccc",
  },
  contatoText: {
    fontSize: 16,
    color: "#333",
  },
  removerButtonText: {
    color: "#fff",
    fontWeight: "700",
  },
  buttonsContainer: {
    marginTop: "auto",
  },
  botaoPrincipal: {
    backgroundColor: "#3CB371", // verde do salvar
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 20,
    alignItems: "center",
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    marginBottom: 15,
  },
  botaoPrincipalTexto: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 16,
  },
  botaoSair: {
    backgroundColor: "#e63946", // vermelho do logout
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 20,
    alignItems: "center",
    elevation: 3,
    shadowColor: "#b22222",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
  },
  botaoSairTexto: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 16,
  },
});

export default configuracaoStyles;
