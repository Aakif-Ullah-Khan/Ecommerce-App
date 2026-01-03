import React, { useCallback, useState } from "react";
import { Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { Button, ButtonText } from "@/components/ui/button";
import {
  Modal,
  ModalBackdrop,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader
} from "@/components/ui/modal";

export default function Index() {
  const [showModal, setShowModal] = useState(false);

  const openModal = useCallback(() => setShowModal(true), []);
  const closeModal = useCallback(() => setShowModal(false), []);

  return (
    <SafeAreaView className="flex-1 justify-center items-center bg-neutral-900">
      {/* Open Modal Button */}
      <TouchableOpacity
        onPress={openModal}
        activeOpacity={0.8}
        className="px-6 py-3 bg-black rounded-lg"
      >
        <Text className="text-white text-base font-medium">
          Open Modal
        </Text>
      </TouchableOpacity>

      {/* Modal */}
      <Modal isOpen={showModal} onClose={closeModal} size="sm">
        <ModalBackdrop />

        <ModalContent className="bg-neutral-800 rounded-xl">
          <ModalHeader className="flex-row justify-between items-center">
            <Text className="text-lg font-semibold text-white">
              Modal Title
            </Text>

            <ModalCloseButton onPress={closeModal}>
              <Text className="text-white text-base">✕</Text>
            </ModalCloseButton>
          </ModalHeader>

          <ModalBody>
            <Text className="text-neutral-300 leading-6">
              This is the modal body. You can place any content here such as
              forms, confirmations, or alerts.
            </Text>
          </ModalBody>

          <ModalFooter className="flex-row justify-end gap-3">
            <Button
              variant="outline"
              action="secondary"
              onPress={closeModal}
            >
              <ButtonText>Cancel</ButtonText>
            </Button>

            <Button onPress={closeModal}>
              <ButtonText>Save</ButtonText>
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </SafeAreaView>
  );
}
