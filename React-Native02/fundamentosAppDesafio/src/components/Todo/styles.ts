import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#1f1e25',
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10

  },
  anotacao:{
    color: '#C7FFED',
    flex: 1,
    fontSize: 16,
    marginLeft: 16
  },
  anotacaoTachado:{
    color: '#C7FFED',
    flex: 1,
    fontSize: 16,
    marginLeft: 16,
    textDecorationLine: 'line-through',
  },
  buttonText: {
    color: '#FFF',
    fontSize: 30
  },
  button: {
    width: 56,
    height: 56,
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkboxContainer: {
    flexDirection: "row",
    marginBottom: 20
  },
  checkBox: {
    alignSelf: "center",
    borderRadius: 20
  },
})