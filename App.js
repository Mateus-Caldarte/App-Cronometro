import React, {Component} from 'react';
import {Image, View, Text, StyleSheet, TouchableOpacity} from 'react-native';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numero: 0,
      text: 'Start',
      clear: 'Limpar',
      last: 0,
    };
    this.clear = this.clear.bind(this);
    this.timer = null;
    this.start = this.start.bind(this);
  }

  start() {
    if (this.timer != null) {
      clearInterval(this.timer);
      this.timer = null;
      this.setState({text: 'Start'});
    } else {
      this.timer = setInterval(() => {
        this.setState({numero: this.state.numero + 0.1});
      }, 100);
      this.setState({text: 'Stop'});
    }
  }

  clear() {
    if (this.timer != null) {
      clearInterval(this.timer);
      this.timer = null;
    }
    this.setState({
      last: this.state.numero.toFixed(2) + ' Segundos',
      numero: 0,
      text: 'Start',
    });
    this.setState({numero: 0});
  }

  render() {
    return (
      <View style={style.container}>
        <Image source={require('./src/cronometro.png')} />
        <Text style={style.contador}>{this.state.numero.toFixed(1)}</Text>

        <View style={style.area}>
          <TouchableOpacity style={style.btn} onPress={this.start}>
            <Text style={style.textButton}>{this.state.text}</Text>
          </TouchableOpacity>

          <TouchableOpacity style={style.btn} onPress={this.clear}>
            <Text style={style.textButton}>{this.state.clear}</Text>
          </TouchableOpacity>
        </View>
        <View>
          <Text style={style.lastNumber}>Último valor: {this.state.last}</Text>
        </View>
      </View>
    );
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00aeef',
  },
  contador: {
    marginTop: -145,
    fontSize: 40,
    fontWeight: 'bold',
    color: '#FFF',
  },
  area: {
    flexDirection: 'row',
    marginTop: 80,
  },
  textButton: {
    fontSize: 20,
    color: '#00aeef',
    fontWeight: 'bold',
  },
  btn: {
    height: 40,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF',
    margin: 17,
    borderColor: '#FFF',
    borderRadius: 10,
  },
  lastNumber: {
    marginTop: 10,
    fontSize: 25,
    fontStyle: 'italic',
    color: '#FFF',
  },
});

export default App;
