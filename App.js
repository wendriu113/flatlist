import { StatusBar } from 'expo-status-bar';

import { FlatList, StyleSheet, Text, View, Image, TouchableOpacity, Linking, Alert } from 'react-native';

const filmes = [
  {
    id: 1,
    nome: 'Yasuo',
    lancamento: '13 de dezembro de 2013',
    genero: 'Ficção',
    maestria: '240.817',
    imagem: require('./assets/yasuo1.jpg'),
    sinopse: "Yasuo é um espadachim do jogo League of Legends. Ele usa vento para lutar, tem muita mobilidade e pode bloquear projéteis com uma parede de vento. É forte quando acerta combos e críticos, mas é difícil de jogar bem.",
    url: "https://universe.leagueoflegends.com/pt_BR/story/champion/yasuo/"
  },
  {
    id: 2,
    nome: 'Ekko',
    lancamento: '29 de maio de 2015.',
    genero: 'Ficção',
    maestria: '230.142',
    imagem: require('./assets/ekko.jpg'),
    sinopse: "Ekko é um jovem inventor de Zaun no jogo League of Legends. Ele usa tecnologia para manipular o tempo, podendo voltar alguns segundos para evitar morrer ou refazer uma jogada. É rápido e causa bastante dano quando acerta o combo.",
    url: "https://universe.leagueoflegends.com/pt_BR/champion/ekko/"
  },
  {
    id: 3,
    nome: 'Swain',
    lancamento: '5 de outubro de 2010.',
    genero: 'Ficção',
    maestria: '154.081',
    imagem: require('./assets/ekko.jpg'),
    sinopse: "Swain é um poderoso líder de Noxus no jogo League of Legends. Ele usa magia sombria e corvos para drenar vida dos inimigos e ficar mais forte nas lutas.",
    url: "https://universe.leagueoflegends.com/pt_BR/champion/ekko/"
  },
  {
    id: 4,
    nome: 'Ekko',
    lancamento: '29 de maio de 2015.',
    genero: 'Ficção',
    maestria: '230.142',
    imagem: require('./assets/ekko.jpg'),
    sinopse: "Ekko é um jovem inventor de Zaun no jogo League of Legends. Ele usa tecnologia para manipular o tempo, podendo voltar alguns segundos para evitar morrer ou refazer uma jogada. É rápido e causa bastante dano quando acerta o combo.",
    url: "https://universe.leagueoflegends.com/pt_BR/champion/ekko/"
  },
  {
    id: 5,
    nome: 'Ekko',
    lancamento: '29 de maio de 2015.',
    genero: 'Ficção',
    maestria: '230.142',
    imagem: require('./assets/ekko.jpg'),
    sinopse: "Ekko é um jovem inventor de Zaun no jogo League of Legends. Ele usa tecnologia para manipular o tempo, podendo voltar alguns segundos para evitar morrer ou refazer uma jogada. É rápido e causa bastante dano quando acerta o combo.",
    url: "https://universe.leagueoflegends.com/pt_BR/champion/ekko/"
  },
  {
    id: 6,
    nome: 'Ekko',
    lancamento: '29 de maio de 2015.',
    genero: 'Ficção',
    maestria: '230.142',
    imagem: require('./assets/ekko.jpg'),
    sinopse: "Ekko é um jovem inventor de Zaun no jogo League of Legends. Ele usa tecnologia para manipular o tempo, podendo voltar alguns segundos para evitar morrer ou refazer uma jogada. É rápido e causa bastante dano quando acerta o combo.",
    url: "https://universe.leagueoflegends.com/pt_BR/champion/ekko/"
  }
];

export default function App() {

  const criaItem = ({ item }) => (
    <TouchableOpacity 
      style={styles.listaItem} 
      onPress={() => 
        Alert.alert(
          'Lore', 
          item.sinopse, 
          [
            {
              text: 'Ler Lore', 
              onPress: () => Linking.openURL(item.url), 
            },
            {
              text: 'Fechar', 
              style: 'cancel', 
            }
          ]
        )
      }
    >
      <Image source={item.imagem} style={styles.listaImagem} />

      <View style={styles.listaDetalhes}>
        
        <Text style={styles.textoForte}>Campeão: <Text style={styles.textoNormal}>{item.nome}</Text></Text>
        <Text style={styles.textoForte}>lancamento: <Text style={styles.textoNormal}>{item.lancamento}</Text></Text>
        <Text style={styles.textoForte}>Gênero: <Text style={styles.textoNormal}>{item.genero}</Text></Text>
        <Text style={styles.textoForte}>Maestria: <Text style={styles.textoNormal}>{item.maestria}</Text></Text>     
      </View>

    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <StatusBar style="auto"/>
      <Text style={styles.titulo}>Mains LOL</Text>

      <FlatList 
        data={filmes} 
        renderItem={criaItem} 
        keyExtractor={item => item.id.toString()} 
        showsVerticalScrollIndicator={false} 
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',

    paddingTop: 50,
    paddingHorizontal: 10,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
    textAlign: 'center',
  },
  listaItem: {
    backgroundColor: '#d8e4ed',
    marginBottom: 15,
    padding: 15,
    borderRadius: 15,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 3,
  },
  listaImagem: {
    width: 60,
    height: 90,
    borderRadius: 8,
  },
  listaDetalhes: {
    marginLeft: 15,
    flex: 1,
  },
  textoForte: {
    fontWeight: 'bold',
    fontSize: 14,
    color: '#222',
  },
  textoNormal: {
    fontWeight: 'normal',
    color: '#444',
  }
});