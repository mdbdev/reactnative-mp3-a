import React, { useState, useEffect } from "react";
import { Platform, View } from "react-native";
import { Appbar, TextInput, Snackbar, Button } from "react-native-paper";
import { getFileObjectAsync, uuid } from "../../../Utils";

// See https://github.com/mmazzarolo/react-native-modal-datetime-picker
// Most of the date picker code is directly sourced from the example.
import DateTimePickerModal from "react-native-modal-datetime-picker";

// See https://docs.expo.io/versions/latest/sdk/imagepicker/
// Most of the image picker code is directly sourced from the example.
import * as ImagePicker from "expo-image-picker";
import { styles } from "./NewSocialScreen.styles";

import firebase from "firebase/app";
import "firebase/firestore";
import { SocialModel } from "../../../models/social";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../RootStackScreen";

// convert local file URI to a Blob
import * as FileSystem from "expo-file-system";

// Function to convert file URI to Blob
import { Buffer } from "buffer";

async function convertUriToBuffer(fileUri: string) {
  // Read the file as a base64 string
  const base64Data = await FileSystem.readAsStringAsync(fileUri, {
    encoding: FileSystem.EncodingType.Base64,
  });
  // Convert the base64 string to a Uint8Array using Buffer
  const bytes = Uint8Array.from(Buffer.from(base64Data, 'base64'));
  return bytes;
}

// supabase imports
import { createClient } from "@supabase/supabase-js";

// Make sure to set this in your .env file
// Make sure to put your .env file in your .gitignore so your 
// credentials are not exposed to the world!
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;

if (!supabaseKey) {
  throw new Error("SUPABASE_KEY is not defined. Please set it in your environment variables.");
}
if (!supabaseUrl || !supabaseKey) {
  throw new Error("SUPABASE_URL or SUPABASE_KEY is not defined. Please set them in your environment variables.");
}

// Declare your Supabase client here
// Reference the docs here: https://supabase.com/docs
// Ensure to install supabase on your project, you'll know 
// if you did this correctly if you see a supabase folder in 
// your project directory.

interface Props {
  navigation: StackNavigationProp<RootStackParamList, "NewSocialScreen">;
}

export default function NewSocialScreen({ navigation }: Props) {
  /* TODO: Declare state variables for all of the attributes 
           that you need to keep track of on this screen.
    
     HINTS:

      1. There are five core attributes that are related to the social object.
      2. There are two attributes from the Date Picker.
      3. There is one attribute from the Snackbar.
      4. There is one attribute for the loading indicator in the submit button.
  
  */

  // TODO: Follow the Expo Docs to implement the ImagePicker component.
  // https://docs.expo.io/versions/latest/sdk/imagepicker/

  // TODO: Follow the GitHub Docs to implement the react-native-modal-datetime-picker component.
  // https://github.com/mmazzarolo/react-native-modal-datetime-picker

  // TODO: Follow the SnackBar Docs to implement the Snackbar component.
  // https://callstack.github.io/react-native-paper/snackbar.html

  const saveEvent = async () => {
    // TODO: Validate all fields (hint: field values should be stored in state variables).
    // If there's a field that is missing data, then return and show an error
    // using the Snackbar.

    // Otherwise, proceed onwards with uploading the image, and then the object.

    try {

      // NOTE: THE BULK OF THIS FUNCTION IS ALREADY IMPLEMENTED FOR YOU IN HINTS.TSX.
      // READ THIS TO GET A HIGH-LEVEL OVERVIEW OF WHAT YOU NEED TO DO, THEN GO READ THAT FILE!

      // (0) Supabase Storage wants the image as a Uint8Array buffer, so we first convert 
      // the file path saved in our eventImage state variable to that.
      // This is done using the convertUriToBuffer function above.
      // Ensure to use the "await" keyword, since this is an async function.

      // (1) Write the image to Supabase Storage. Again, use the
      // "await" keyword, since we're in an async function.

      // (2) Get the public URL of the file we just wrote. We're going to put that
      //  URL into Firestore (where our data itself is stored).

      // (3) Construct & write the social model to the "socials" collection in Firestore.
      // The eventImage should be the URL that we got from (3).
      // Make sure to do this using an async keyword.
      
      // (4) If nothing threw an error, then go to confirmation screen (which is a screen you must implement).
      //     Otherwise, show an error.

    } catch (e) {
      console.log("Error while writing social:", e);
    }
  };

  const Bar = () => {
    return (
      <Appbar.Header>
        <Appbar.Action onPress={navigation.goBack} icon="close" />
        <Appbar.Content title="Socials" />
      </Appbar.Header>
    );
  };

  return (
    <>
      <Bar />
      <View style={{ ...styles.container, padding: 20 }}>
        {/* TextInput */}
        {/* TextInput */}
        {/* TextInput */}
        {/* Button */}
        {/* Button */}
        {/* Button */}
        {/* DateTimePickerModal */}
        {/* Snackbar */}
      </View>
    </>
  );
}