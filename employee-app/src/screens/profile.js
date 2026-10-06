import React from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  Linking,
  StyleSheet,
} from "react-native";
import { Card, Button } from "react-native-paper";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialIcons } from "@expo/vector-icons";

const Profile = () => {
  return (
    <ScrollView
      style={styles.root}
      contentContainerStyle={styles.scroll}
      showsVerticalScrollIndicator={false}
    >
      {/* En-tête dégradé */}
      <LinearGradient
        colors={["#ff0066", "#ff8fb8"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.header}
      />

      {/* Identité */}
      <View style={styles.identity}>
        <Image
          style={styles.avatar}
          source={{
            uri: "https://images.unsplash.com/photo-1608237652484-b478fac3bf7c?q=80&w=435&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          }}
        />
        <Text style={styles.name}>Madame la chevre</Text>
        <View style={styles.rolePill}>
          <Text style={styles.roleText}>Princesse</Text>
        </View>
        <Text style={styles.bio}>Je ne travaille pas je suis une princesse</Text>
      </View>

      {/* Infos */}
      <View style={styles.section}>
        {/* Email : un appui ouvre l'app de messagerie */}
        <Card
          style={styles.mycard}
          elevation={0}
          onPress={() => Linking.openURL("mailto:chevre@princesse.com")}
        >
          <View style={styles.cardcontent}>
            <View style={[styles.iconCircle, { backgroundColor: "#e8f1ff" }]}>
              <MaterialIcons name="email" size={22} color="#1f6feb" />
            </View>
            <View>
              <Text style={styles.label}>Email</Text>
              <Text style={styles.mytext}>chevre@princesse.com</Text>
            </View>
          </View>
        </Card>

        <Card style={styles.mycard} elevation={0}>
          <View style={styles.cardcontent}>
            <View style={[styles.iconCircle, { backgroundColor: colors.tint }]}>
              <MaterialIcons name="phone" size={22} color={colors.primary} />
            </View>
            <View>
              <Text style={styles.label}>Phone</Text>
              <Text style={styles.mytext}>+1 (234) 567 890</Text>
            </View>
          </View>
        </Card>

        <Card style={styles.mycard} elevation={0}>
          <View style={styles.cardcontent}>
            <View style={[styles.iconCircle, { backgroundColor: "#e6f6ec" }]}>
              <MaterialIcons name="attach-money" size={22} color="#1a9150" />
            </View>
            <View>
              <Text style={styles.label}>Salary</Text>
              <Text style={styles.mytext}>$75,000/year</Text>
            </View>
          </View>
        </Card>
      </View>

      {/* Actions */}
      <View style={styles.buttonsRow}>
        <Button
          icon="account-edit"
          mode="contained"
          buttonColor={colors.primary}
          onPress={() => console.log("Edit")}
          style={styles.button}
          contentStyle={styles.buttonContent}
          labelStyle={styles.buttonLabel}
        >
          Edit
        </Button>
        <Button
          icon="delete"
          mode="outlined"
          textColor={colors.danger}
          onPress={() => console.log("Fire employee")}
          style={[styles.button, styles.dangerButton]}
          contentStyle={styles.buttonContent}
          labelStyle={styles.buttonLabel}
        >
          Fire employee
        </Button>
      </View>
    </ScrollView>
  );
};

export default Profile;

const colors = {
  primary: "#ff0066",
  tint: "#fff0f6",
  ink: "#1c1b22",
  muted: "#6f6d78",
  line: "#e4e2ea",
  bg: "#f6f5f8",
  danger: "#d32f2f",
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: colors.bg,
  },
  scroll: {
    paddingBottom: 32,
  },

  // --- En-tête ---
  header: {
    height: 190,
    borderBottomLeftRadius: 32,
    borderBottomRightRadius: 32,
  },

  // --- Identité ---
  identity: {
    alignItems: "center",
    paddingHorizontal: 24,
    marginBottom: 24,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginTop: -60, // la photo chevauche le dégradé
    borderWidth: 4,
    borderColor: colors.bg,
    backgroundColor: colors.line,
  },
  name: {
    fontSize: 26,
    fontWeight: "800",
    color: colors.ink,
    letterSpacing: -0.4,
    marginTop: 14,
    textAlign: "center",
  },
  rolePill: {
    backgroundColor: colors.tint,
    borderRadius: 999,
    paddingHorizontal: 14,
    paddingVertical: 5,
    marginTop: 8,
  },
  roleText: {
    fontSize: 14,
    fontWeight: "700",
    color: colors.primary,
  },
  bio: {
    fontSize: 15,
    lineHeight: 22,
    color: colors.muted,
    marginTop: 10,
    textAlign: "center",
    maxWidth: 320,
  },

  // --- Infos ---
  section: {
    paddingHorizontal: 20,
    gap: 12,
  },
  mycard: {
    backgroundColor: "#fff",
    borderRadius: 18,
    borderWidth: 1,
    borderColor: colors.line,
  },
  cardcontent: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    gap: 14,
  },
  iconCircle: {
    width: 44,
    height: 44,
    borderRadius: 22,
    alignItems: "center",
    justifyContent: "center",
  },
  label: {
    fontSize: 13,
    color: colors.muted,
    marginBottom: 2,
  },
  mytext: {
    fontSize: 17,
    fontWeight: "700",
    color: colors.ink,
  },

  // --- Boutons ---
  buttonsRow: {
    flexDirection: "row",
    gap: 12,
    paddingHorizontal: 20,
    marginTop: 24,
  },
  button: {
    flex: 1,
    borderRadius: 14,
  },
  dangerButton: {
    borderWidth: 1.5,
    borderColor: colors.danger,
  },
  buttonContent: {
    height: 50,
  },
  buttonLabel: {
    fontSize: 15,
    fontWeight: "700",
  },
});