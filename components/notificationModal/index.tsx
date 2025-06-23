import { colors } from "@/assets/styles/Colors";
import { Gs } from "@/assets/styles/GlobalStyle";
import React from "react";
import {
  Image,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

interface NotificationModalProps {
  visible: boolean;
  title: string;
  message: string;
  icon?: any; // optional image
  onClose: () => void;
}

export default function NotificationModal({
  visible,
  title,
  message,
  icon,
  onClose,
}: NotificationModalProps) {
  return (
    <Modal transparent visible={visible} animationType="fade">
      <View style={styles.overlay}>
        <View style={styles.modalContent}>
          {icon && <Image source={icon} style={styles.icon} />}
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.message}>{message}</Text>

          <TouchableOpacity style={styles.button} onPress={onClose}>
            <Text style={styles.buttonText}>Tutup</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.4)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    backgroundColor: "white",
    padding: 24,
    borderRadius: 16,
    alignItems: "center",
    width: "80%",
  },
  icon: {
    width: 50,
    height: 50,
    marginBottom: 16,
  },
  title: {
    ...Gs.font700,
    fontSize: 18,
    marginBottom: 8,
  },
  message: {
    ...Gs.font400,
    textAlign: "center",
    marginBottom: 20,
    color: colors.black,
  },
  button: {
    backgroundColor: colors.primary,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  buttonText: {
    color: "white",
    ...Gs.font600,
  },
});
