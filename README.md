# Signup Login Module for react-native
This module is helpful to create the login and signup page with al the validations, this module make the app deisgn in simple way without writing validations in project, all the required validation are done in the module.

No need to TextInput onChange events when using this module.

![react-native-loginmodule-preview](https://github.com/shaikhussian/react-native-loginmodule-Example/blob/master/demos/react-native-loginmodule-preview.gif?raw=true)
# Pre-requisites
react-native, node.js and a platform-specific tools needed to compile native NPM module (which you may already have);
 
 when you creating react-native init projectName.
 
 ### Installation
 
 To install the react-native-loginmodule, simply run the following command within your app's directory:
 
 ```sh
 npm i react-native-loginmodule --save
 ``` 
 
 ### Development
 
 ##Example:
 ```sh 
import {UserName, EMail, Password, CustomButton, ButtonAction} from 'react-native-loginmodule';
import React, {Component} from 'react';
import {Container, Content, Form} from 'native-base';
```
```sh 
export default class Sample extends Component {
    Login(){
        let AppName = "xxx APP"  // Name of the app
        const url = 'xxxx url'   //Api url
        const fields={EMail:'EMail',Password:'Password'}  // Input fields that used in this class imported from this module
        
        //pass the key like 'Login' for login and 'register' for register
        
        ButtonAction(AppName,'Login',url,fields).then((res)=>{
            console.log(res);
        })
    }
    return (
            <Container>
                <Content contentContainerStyle={{flex:1,justifyContent: 'center'}}>
                    <Form>
                      <UserName />
                      <EMail />
                      <Password />
                    </Form>
                    <CustomButton onPress={this.Login.bind(this)}>Login</CustomButton>
                </Content>
            </Container>
        );
}
```

### Fields included in this module
#### Note: use the fields like this only
```sh 
   <EMail />
   <FirstName />
   <LastName />
   <Password />
   <PhoneNumber />
   <UserName />
   <FullName />
```
 
 ### Button used for login and signup
 
 ```sh 
    <CustomButton />
 ```
