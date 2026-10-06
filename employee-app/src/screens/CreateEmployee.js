import { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
  Pressable,
} from "react-native";
import { TextInput, Button, Modal } from "react-native-paper";

const CreateEmployee = () => {
  const [name, setName] = useState("");
  const [position, setPosition] = useState("");
  const [image, setImage] = useState("");
  const [salary, setSalary] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  // false = la modal est cachée au démarrage
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.root}>
      <ScrollView
        contentContainerStyle={styles.scroll}
        keyboardShouldPersistTaps="handled"
      >
        {/* En-tête */}
        <Text style={styles.title}>New employee</Text>
        <Text style={styles.subtitle}>
          Fill in the details below to add someone to the team.
        </Text>

        {/* Photo */}
        <View style={styles.avatarWrap}>
          <Pressable
            onPress={() => setModalVisible(true)}
            style={({ pressed }) => [
              styles.avatar,
              pressed && styles.avatarPressed,
            ]}
          >
            {image ? (
              <Image source={{ uri: image }} style={styles.avatarImage} />
            ) : (
              <>
                <Text style={styles.avatarPlus}>+</Text>
                <Text style={styles.avatarText}>Add photo</Text>
              </>
            )}
          </Pressable>
        </View>

        {/* Champs */}
        <TextInput
          label="Name"
          value={name}
          onChangeText={(text) => setName(text)}
          mode="outlined"
          style={styles.inputStyle}
          outlineStyle={styles.outline}
          theme={theme}
        />

        <TextInput
          label="Position"
          value={position}
          onChangeText={(text) => setPosition(text)}
          mode="outlined"
          style={styles.inputStyle}
          outlineStyle={styles.outline}
          theme={theme}
        />

        <View style={styles.row}>
          <TextInput
            label="Salary"
            value={salary}
            onChangeText={(text) => setSalary(text)}
            mode="outlined"
            style={[styles.inputStyle, styles.half]}
            outlineStyle={styles.outline}
            theme={theme}
          />
          <TextInput
            label="Phone"
            value={phone}
            onChangeText={(text) => setPhone(text)}
            mode="outlined"
            style={[styles.inputStyle, styles.half]}
            outlineStyle={styles.outline}
            theme={theme}
          />
        </View>

        <TextInput
          label="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
          mode="outlined"
          style={styles.inputStyle}
          outlineStyle={styles.outline}
          theme={theme}
        />

        {/* Bouton principal */}
        <Button
          icon="content-save"
          mode="contained"
          onPress={() => console.log("Save pressed")}
          theme={theme}
          style={styles.saveButton}
          contentStyle={styles.saveContent}
          labelStyle={styles.saveLabel}
        >
          Save employee
        </Button>
      </ScrollView>

      {/* Modal en bas d'écran */}
      <Modal
        visible={modalVisible}
        onDismiss={() => setModalVisible(false)}
        style={styles.modalOverlay}
        contentContainerStyle={styles.sheet}
      >
        <View style={styles.handle} />
        <Text style={styles.sheetTitle}>Profile photo</Text>
        <Text style={styles.sheetSubtitle}>Choose where to get the picture.</Text>

        <View style={styles.modalButtonsRow}>
          <Button
            icon="camera"
            mode="contained"
            onPress={() => console.log("Camera pressed")}
            theme={theme}
            style={styles.modalButton}
            contentStyle={styles.modalContent}
            labelStyle={styles.modalLabel}
          >
            Camera
          </Button>
          <Button
            icon="image-area"
            mode="outlined"
            onPress={() => console.log("Gallery pressed")}
            theme={theme}
            style={[styles.modalButton, styles.galleryButton]}
            contentStyle={styles.modalContent}
            labelStyle={[styles.modalLabel, { color: colors.primary }]}
          >
            Gallery
          </Button>
        </View>

        <Button
          mode="text"
          onPress={() => setModalVisible(false)}
          theme={theme}
          style={styles.cancelButton}
          labelStyle={styles.cancelLabel}
        >
          Cancel
        </Button>
      </Modal>
    </View>
  );
};

const colors = {
  primary: "#ff0066",
  tint: "#fff0f6",
  ink: "#1c1b22",
  muted: "#6f6d78",
  line: "#e4e2ea",
  bg: "#f6f5f8",
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: colors.bg,
  },
  scroll: {
    paddingHorizontal: 20,
    paddingTop: 40,
    paddingBottom: 40,
  },

  // --- En-tête ---
  title: {
    fontSize: 28,
    fontWeight: "800",
    color: colors.ink,
    letterSpacing: -0.5,
  },
  subtitle: {
    fontSize: 15,
    lineHeight: 21,
    color: colors.muted,
    marginTop: 4,
  },

  // --- Photo ---
  avatarWrap: {
    alignItems: "center",
    marginVertical: 24,
  },
  avatar: {
    width: 112,
    height: 112,
    borderRadius: 56,
    backgroundColor: colors.tint,
    borderWidth: 2,
    borderColor: colors.primary,
    borderStyle: "dashed",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },
  avatarPressed: {
    opacity: 0.7,
  },
  avatarImage: {
    width: "100%",
    height: "100%",
  },
  avatarPlus: {
    fontSize: 32,
    lineHeight: 34,
    fontWeight: "300",
    color: colors.primary,
  },
  avatarText: {
    fontSize: 12,
    fontWeight: "600",
    color: colors.primary,
  },

  // --- Champs ---
  inputStyle: {
    backgroundColor: "#fff",
    marginBottom: 14,
  },
  outline: {
    borderRadius: 12,
    borderWidth: 1.5,
    borderColor: colors.line,
  },
  row: {
    flexDirection: "row",
    gap: 12,
  },
  half: {
    flex: 1,
  },

  // --- Bouton Save ---
  saveButton: {
    marginTop: 12,
    borderRadius: 14,
  },
  saveContent: {
    height: 54,
  },
  saveLabel: {
    fontSize: 16,
    fontWeight: "700",
    letterSpacing: 0.2,
  },

  // --- Modal ---
  modalOverlay: {
    justifyContent: "flex-end",
  },
  sheet: {
    backgroundColor: "#fff",
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
    paddingHorizontal: 20,
    paddingTop: 12,
    paddingBottom: 24,
  },
  handle: {
    alignSelf: "center",
    width: 40,
    height: 4,
    borderRadius: 2,
    backgroundColor: colors.line,
    marginBottom: 20,
  },
  sheetTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: colors.ink,
  },
  sheetSubtitle: {
    fontSize: 14,
    color: colors.muted,
    marginTop: 2,
    marginBottom: 20,
  },
  modalButtonsRow: {
    flexDirection: "row",
    gap: 12,
  },
  modalButton: {
    flex: 1,
    borderRadius: 14,
  },
  galleryButton: {
    borderWidth: 1.5,
    borderColor: colors.primary,
  },
  modalContent: {
    height: 50,
  },
  modalLabel: {
    fontSize: 15,
    fontWeight: "700",
  },
  cancelButton: {
    marginTop: 12,
  },
  cancelLabel: {
    fontSize: 15,
    color: colors.muted,
  },
});

const theme = {
  roundness: 12,
  colors: {
    primary: colors.primary,
    background: "#fff",
  },
};

export default CreateEmployee;