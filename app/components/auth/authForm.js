import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Platform,
  Button,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';
import {Height, Width} from '../../constant/index';

import Input from '../../utils/forms/input';
import ValidationRules from '../../utils/forms/validationRules';

class AuthForm extends Component {
  state = {
    type: 'Login',
    action: 'Login',
    actionMode: 'I want to register',
    hasErrors: false,
    form: {
      firstname: {
        value: '',
        valid: false,
        type: 'textinput',
        rules: {
          isRequired: true,
        },
      },
      lastname: {
        value: '',
        valid: false,
        type: 'textinput',
        rules: {
          isRequired: true,
        },
      },
      mobile: {
        value: '',
        valid: false,
        type: 'textinput',
        rules: {
          isRequired: true,
        },
      },
      address: {
        value: '',
        valid: false,
        type: 'textinput',
        rules: {
          isRequired: true,
        },
      },
      dob: {
        value: '',
        valid: false,
        type: 'textinput',
        rules: {
          isRequired: true,
        },
      },
      gender: {
        value: '',
        valid: false,
        type: 'textinput',
        rules: {
          isRequired: true,
        },
      },
      email: {
        value: '',
        valid: false,
        type: 'textinput',
        rules: {
          isRequired: true,
          isEmail: true,
        },
      },
      password: {
        value: '',
        valid: false,
        type: 'textinput',
        rules: {
          isRequired: true,
          minLength: 6,
        },
      },
    },
  };

  formHasErrors = () =>
    this.state.hasErrors ? (
      <View style={styles.errorContainer}>
        <Text style={styles.errorLabel}>Oops, check your info.</Text>
      </View>
    ) : null;

  OtherOption = () =>
    this.state.type != 'Login' ? (
      <View>
        <View style={styles.formspace}>
          <Input
            placeholder="Enter FirSt Name"
            placeholderTextColor="#696969"
            type={this.state.form.firstname.type}
            value={this.state.form.firstname.value}
            onChangeText={(value) => this.updateInput('firstname', value)}
            overrideStyles={{color: '#000'}}
          />
        </View>
        <View style={styles.formspace}>
          <Input
            placeholder="Enter Last Name"
            placeholderTextColor="#696969"
            type={this.state.form.lastname.type}
            value={this.state.form.lastname.value}
            onChangeText={(value) => this.updateInput('lastname', value)}
            overrideStyles={{color: '#000'}}
          />
        </View>
        <View style={styles.formspace}>
          <Input
            placeholder="Enter address"
            placeholderTextColor="#696969"
            type={this.state.form.address.type}
            value={this.state.form.address.value}
            onChangeText={(value) => this.updateInput('address', value)}
            overrideStyles={{color: '#000'}}
          />
        </View>
        <View style={styles.formspace}>
          <Input
            placeholder="Enter DOB"
            placeholderTextColor="#696969"
            type={this.state.form.dob.type}
            value={this.state.form.dob.value}
            onChangeText={(value) => this.updateInput('dob', value)}
            overrideStyles={{color: '#000'}}
          />
        </View>
        <View style={styles.formspace}>
          <Input
            placeholder="Enter Gender"
            placeholderTextColor="#696969"
            type={this.state.form.gender.type}
            value={this.state.form.gender.value}
            onChangeText={(value) => this.updateInput('gender', value)}
            overrideStyles={{color: '#000'}}
          />
        </View>
        <View style={styles.formspace}>
          <Input
            placeholder="Enter Email"
            placeholderTextColor="#696969"
            type={this.state.form.email.type}
            value={this.state.form.email.value}
            onChangeText={(value) => this.updateInput('email', value)}
            overrideStyles={{color: '#000'}}
          />
        </View>
      </View>
    ) : null;

  changeFormType = () => {
    const type = this.state.type;
    this.setState({
      type: type === 'Login' ? 'Register' : 'Login',
      action: type === 'Login' ? 'Register' : 'Login',
      actionMode: type === 'Login' ? 'I want to Login' : 'I want to register',
    });
  };

  submitUser = () => {
    this.props.navigation.navigate('App');
  };

  updateInput = (name, value) => {
    this.setState({
      hasErrors: false,
    });

    let formCopy = this.state.form;
    formCopy[name].value = value;

    //rules
    let rules = formCopy[name].rules;
    let valid = ValidationRules(value, rules, formCopy);
    console.log(valid);
    formCopy[name].valid = valid;

    this.setState({form: formCopy});
  };

  render() {
    return (
      <KeyboardAvoidingView style={styles.container}>
        <View>
          {this.OtherOption()}
          <View style={styles.formspace}>
            <Input
              placeholder="Enter Mobile No."
              placeholderTextColor="#696969"
              type={this.state.form.mobile.type}
              value={this.state.form.mobile.value}
              autoCapitalize={'none'}
              keyboardType={'phone-pad'}
              onChangeText={(value) => this.updateInput('mobile', value)}
              overrideStyles={{color: '#000'}}
            />
          </View>
          <View style={styles.formspace}>
            <Input
              placeholder="Enter your password"
              placeholderTextColor="#696969"
              type={this.state.form.password.type}
              value={this.state.form.password.value}
              onChangeText={(value) => this.updateInput('password', value)}
              overrideStyles={{color: '#000'}}
              secureTextEntry
            />
          </View>

          {this.formHasErrors()}
          <View style={{marginTop: 20}}>
            <View style={styles.button}>
              <TouchableOpacity
                onPress={() => this.props.goNext()}
                style={styles.buttondec}>
                <Text style={styles.btntext}>{this.state.action}</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.button}>
              <TouchableOpacity
                onPress={this.changeFormType}
                style={styles.buttondec}>
                <Text style={styles.btntext}>{this.state.actionMode}</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  formspace: {
    borderColor: 'blue',
    borderWidth: 3,
    marginTop: 30,
    borderRadius: 50,
    paddingLeft: 10,
    paddingRight: 3,
  },

  btntext: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },

  buttondec: {
    backgroundColor: '#4B0082',
    padding: 10,
    borderRadius: 15,
  },
  errorContainer: {
    marginBottom: 10,
    marginTop: 30,
    padding: 10,
    backgroundColor: '#f44336',
  },
  errorLabel: {
    color: '#fff',
    textAlignVertical: 'center',
    textAlign: 'center',
  },
  button: {
    ...Platform.select({
      ios: {marginBottom: 0},
      android: {marginTop: 10, marginBottom: 10},
      default: {marginTop: 3, marginBottom: 3},
    }),
  },
});

export default AuthForm;
