import React, {Component} from 'react';
import {Container, Content,Form} from 'native-base';
import {View,ActivityIndicator} from 'react-native';
import {FullName,EMail,Password,CustomButton, ButtonAction} from 'react-native-loginmodule';

type Props = {};
export default class App extends Component<Props> {
    constructor(props){
        super(props);
        this.state={
            activity:false
        }
    }
    Register(){
        this.setState({
            activity:true
        })
        var AppName = "APP Name"
        const url = 'https://mystro.austinconversionoptimization.com/api/login'
        const fields = {FullName:'FullName',EMail:'EMail',Password:'Password'}
        ButtonAction(AppName,'register',url,fields).then((res)=>{
            if(res != undefined){
                if(res.isvalid != undefined){
                    this.setState({
                        activity:false
                    })
                }else{
                    this.setState({
                        activity:false
                    })
                }
            }
        })
    }
    render() {
        return (
            <Container style={{backgroundColor:'yellow'}}>
                <Content contentContainerStyle={{flex:1,justifyContent: 'center'}}>
                    <Form>
                        <FullName
                            onSubmitEditing={(event) => {
                                this._inputsecond._root.focus();
                            }}
                            returnKeyType={'next'}/>
                        <EMail
                            getRef={(c) => this._inputsecond = c}
                            returnKeyType={'next'}
                            onSubmitEditing={(event) => {
                                this._inputThrird._root.focus();
                            }}/>
                        <Password
                            getRef={(c) => this._inputThrird = c}
                            returnKeyType={'done'}
                            onSubmitEditing={(event) => {
                                console.log("RegisterAction")
                            }}/>
                    </Form>
                    <CustomButton onPress={this.Register.bind(this)} style={{marginTop:10}}>Register</CustomButton>
                </Content>
                {this.state.activity ? (
                    <View style={{flex:1,alignSelf:'center'}}>
                        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                            <ActivityIndicator size="large" color="blue" />
                        </View>
                    </View>
                ):(<View></View>)}
            </Container>
        );
    }
}

