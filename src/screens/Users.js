import React, { useState } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import axios from "axios";
import vitamon from "../api/vitamon";

class UsersScreen extends React.Component {
  state = { users: [] };

  async componentDidMount() {
    await this.getUsers();
  }

  async getUsers() {
    try {
      let { data } = await vitamon.get("/api/users");
      this.setState({ users: data });
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    let users = this.state.users || [];
    let user = users[0];

    return (
      <View>
        <FlatList
          data={users}
          renderItem={({ item }) => {
            return (
              <View>
                <Text>{item.email}</Text>
              </View>
            );
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({});

export default UsersScreen;
