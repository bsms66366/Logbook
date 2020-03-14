import React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity
} from "react-native";
import Constants from "expo-constants";
import { SQLite } from "expo-sqlite";


const db = SQLite.openDatabase("db.db");



const addDataToDb = () => {

  db.transaction(tx => {

    tx.executeSql(
      "create table if not exists DataTable (id integer primary key not null, column_1 int text);",
      []
    );

    tx.executeSql(
      "insert into DataTable (column_1) values (?)",
      [argument_1]
    );

    tx.executeSql(
      "select * from location",
      [],
      (_, { rows: { _array } }) => setScores(_array),
      () => console.log("error fetching")
    );

  });
};