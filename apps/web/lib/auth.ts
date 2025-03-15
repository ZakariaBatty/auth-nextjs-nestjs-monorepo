'use server';

import { redirect } from 'next/navigation';
import { BACKEND_URL } from './constants';
import { FormState, SigninFormSchema, SignupFormSchema } from './type';
import { createSession } from './session';

// @ sign up function
export async function signUp(
   state: FormState,
   formData: FormData
): Promise<FormState> {
   // validate the form fields
   const validationFields = SignupFormSchema.safeParse({
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      password: formData.get('password') as string,
   });
   // if the form fields are not valid return the error
   if (!validationFields.success) {
      return { error: validationFields.error?.flatten().fieldErrors };
   }

   // if the form fields are valid send the request to the server
   const response = await fetch(`${BACKEND_URL}/auth/signup`, {
      method: 'POST',
      headers: {
         'Content-Type': 'application/json',
      },
      body: JSON.stringify(validationFields.data),
   });
   // if the response is ok redirect the user to the sign in page
   if (response.ok) {
      redirect('/auth/signin');
   } else
      // if the response is not ok return the error message
      return {
         message:
            response.status === 409
               ? 'The user is already existed!'
               : response.statusText,
      };
}

export async function signIn(
   state: FormState,
   formData: FormData
): Promise<FormState> {
   // validate the form fields
   const validatedFileds = SigninFormSchema.safeParse({
      email: formData.get('email') as string,
      password: formData.get('password') as string,
   });
   // if the form fields are not valid return the error
   if (!validatedFileds.success)
      return {
         error: validatedFileds.error?.flatten().fieldErrors,
      };

   // if the form fields are valid send the request to the server
   const response = await fetch(`${BACKEND_URL}/auth/signin`, {
      method: 'POST',
      headers: {
         'Content-Type': 'application/json',
      },
      body: JSON.stringify(validatedFileds.data),
   });
   console.log('respose', response.status);

   // if the response is ok redirect the user to the home page
   if (response.ok) {
      const result = await response.json();
      // TODO: Create The Sessiion for Authenticated User .
      await createSession({
         user: {
            id: result.id,
            name: result.name,
         },
      });

      redirect('/');
   }
   // if the response is not ok return the error message
   else
      return {
         message:
            response.status === 401
               ? 'Invalid Credentials'
               : response.statusText,
      };
}
