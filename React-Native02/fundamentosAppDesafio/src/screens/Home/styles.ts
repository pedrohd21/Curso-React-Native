import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0D0D0D',
    padding: 10
  },
  nav: {
    color: '#C7FFED',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 48,
    textAlign: 'center'
  },
  input: {
    flex: 1,
    height: 56,
    backgroundColor: '#023535',
    borderRadius: 5,
    color: "#C7FFED",
    padding: 16,
    fontSize: 16,
    marginRight: 12
  },
  button: {
    width: 56,
    height: 56,
    borderRadius: 5,
    backgroundColor: '#023535',
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    color: '#C7FFED',
    fontSize: 24
  },
  form: {
    width: '100%',
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 12
  },
  listEmptyText: {
    color: '#C7FFED',
    fontSize: 20,
    textAlign: 'center',
  },
  criadas:{
    fontWeight: 'bold',
    marginTop: 48,
    alignItems: 'center',
  },
  icon:{
    color: '#C7FFED',
    fontSize: 140,
    textAlign: 'center',
  }
})