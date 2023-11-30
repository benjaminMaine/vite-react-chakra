import React, { FormEventHandler, useState } from 'react';

import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  useDisclosure,
} from '@chakra-ui/react';

import { useCreatePost } from '../requests/posts/useCreatePost';

export const AddPostModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { mutate: createPostMutate } = useCreatePost({ onSuccess: onClose });
  const [title, setTitle] = useState<string | undefined>(undefined);
  const [description, setDescription] = useState<string | undefined>(undefined);
  const [author, setAuthor] = useState<string | undefined>(undefined);

  const handleSubmit: FormEventHandler = (e) => {
    e.preventDefault();
    if (title && author) {
      createPostMutate({ title, author, description });
    }
  };
  return (
    <>
      <Button onClick={onOpen}>Create a new post</Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent as="form" onSubmit={handleSubmit}>
          <FormControl as="fieldset">
            <ModalHeader>Create new post</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <FormControl
                as="fieldset"
                display="flex"
                flexDir="column"
                gap={4}
              >
                <Stack>
                  <FormLabel htmlFor="title">Title*</FormLabel>
                  <Input
                    name="title"
                    onChange={({ target }) => {
                      setTitle(target.value);
                    }}
                  />
                </Stack>
                <Stack>
                  <FormLabel htmlFor="author">Author*</FormLabel>
                  <Input
                    name="author"
                    onChange={({ target }) => {
                      setAuthor(target.value);
                    }}
                  />
                </Stack>
                <Stack>
                  <FormLabel htmlFor="description">Description</FormLabel>
                  <Input
                    name="description"
                    onChange={({ target }) => {
                      setDescription(target.value);
                    }}
                  />
                </Stack>
              </FormControl>
            </ModalBody>

            <ModalFooter>
              <Button variant="ghost" onClick={onClose}>
                Close
              </Button>
              <Button colorScheme="blue" mr={3} type="submit">
                Create
              </Button>
            </ModalFooter>
          </FormControl>
        </ModalContent>
      </Modal>
    </>
  );
};
