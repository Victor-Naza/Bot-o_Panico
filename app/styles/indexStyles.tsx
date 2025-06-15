import { StyleSheet } from "react-native";

const indexStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f2f6fc",
    justifyContent: "center",
    alignItems: "center",
  },
  configButton: {
    position: "absolute",
    top: 30,
    right: 20,
    backgroundColor: "#6200ea",
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderRadius: 25,
    flexDirection: "row",
    alignItems: "center",
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  configButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
  title: {
    fontSize: 28,
    fontWeight: "700",
    color: "#333",
    marginBottom: 40,
  },
  alertButton: {
    backgroundColor: "#e63946",
    width: 200,
    height: 200,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    elevation: 5,
    shadowColor: "#b22222",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
  },
  alertButtonText: {
    color: "#fff",
    fontWeight: "900",
    fontSize: 22,
    textAlign: "center",
  },
});

export default indexStyles;