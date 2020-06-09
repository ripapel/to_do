import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
    loaderContainer: {
        flex: 1,
        alignContent: "center",
        justifyContent: "center",
        alignItems: "center",
    },

    todoItem: {
        flexDirection: "row",
        paddingVertical: 5,
        borderBottomColor: "#ddd",
        borderBottomWidth: 1,
        alignItems: "center",
        color: "rgb(60, 103, 110)",
    },

    homeRoot: {
        margin: 20,
        flex: 1,
        justifyContent: "center",
    },

    textLarge: {
        fontSize: 80,
        marginBottom: 30,
        color: "rgb(60, 103, 110)",
    },

    primaryButton: {
        backgroundColor: "rgb(60, 103, 110)",
        paddingVertical: 12,
        paddingHorizontal: 25,
        borderRadius: 7,
        alignItems: "center",
    },

    primaryButtonText: {
        fontSize: 18,
        color: "white",
    },

    todosContainer: {
        marginTop: 10,
        marginHorizontal: 15,
      },
      title: {
        fontSize: 35,
        color: "rgb(60, 103, 110)",
        marginBottom: 10,
      },
});