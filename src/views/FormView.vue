<template>
  <div class="flex justify-center view-section">
    <div class="border-2 w-100 mt-5">
      <h3 class="text-xl mt-3">Sign Up Form</h3>
      <div class="component-section">
        <div class="component-section">
          <Form
            :validation-schema="schema"
            @submit="onSubmit"
            @invalid-submit="onInvalidSubmit"
          >
            <TextInput
              customClass="block mb-2"
              inputType="text"
              placeholder="name"
              name="name"
              :value="values.name"
            />
            <TextInput
              customClass="block mb-2"
              inputType="text"
              placeholder="surname"
              name="surname"
              :value="values.surname"
            />
            <TextInput
              customClass="block mb-2"
              inputType="email"
              placeholder="email"
              name="email"
              :value="values.email"
            />
            <TextInput
              customClass="block mb-2"
              inputType="password"
              placeholder="password"
              name="password"
              :value="values.password"
            />
            <TextInput
              customClass="block mb-2"
              inputType="password"
              placeholder="confirm password"
              name="passwordConfirmation"
              :value="values.passwordConfirmation"
            />
            <input text="submit" type="submit" class="btn mt5" />
          </Form>
          <Modal
            title="Sign Up"
            content="You have successfully signed up!"
            closeButtonText="Close"
            modalId="form-modal"
            closeMethod="button"
            openButtonDisabled
            :successCloseTrigger="handleAfterModalClose"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TextInput from "@/components/TextInput.vue";

import Modal from "@/components/Modal.vue";
import * as Yup from "yup";
import { Form, useForm, configure } from "vee-validate";

export default {
  name: "FormView",
  components: {
    TextInput,
    Form,
    Modal,
  },
  setup() {
    configure({
      validateOnBlur: false,
      validateOnChange: false,
      validateOnInput: false,
      validateOnModelUpdate: false,
    });

    const schema = Yup.object().shape({
      name: Yup.string().required().min(3),
      surname: Yup.string().required().min(3),
      email: Yup.string().required().email(),
      password: Yup.string().required().min(8),
      passwordConfirmation: Yup.string()
        .required()
        .oneOf([Yup.ref("password")], "Passwords do not match"),
    });

    const { resetForm, values, errors } = useForm({
      initialValues: {
        name: "",
        surname: "",
        email: "",
        password: "",
        passwordConfirmation: "",
      },
      validationSchema: schema,
    });

    const onSubmit = (values, actions) => {
      const modalTrigger = document.getElementById("form-modal-trigger");
      modalTrigger.click();
      actions.resetForm();
    };

    const handleAfterModalClose = () => {
      // do something
    };

    function onInvalidSubmit() {
      // do something
    }

    return {
      onSubmit,
      onInvalidSubmit,
      schema,
      values,
      handleAfterModalClose,
      resetForm,
      errors,
    };
  },
};
</script>
