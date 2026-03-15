import { StatusBar } from 'expo-status-bar';

import { FlatList, StyleSheet, Text, View, Image, TouchableOpacity, Linking, Alert } from 'react-native';

const Campeoes = [
  {
    id: 0,
    nome: 'Wendriu',
    lancamento: 'Aproximadamente 2020',
    genero: 'Jungle/ADC',
    maestria: 'Ekko/Rengar',
    imagem: require('./assets/wendriu.jpg'),
    sinopse: "Por que eu fiz isso com minha vida",
    url: "https://op.gg/pt/lol/summoners/br/Wendriu-1208/mastery"
  },
  {
    id: 1,
    nome: 'Yasuo',
    lancamento: '13 de dezembro de 2013',
    genero: 'Mid/Top',
    maestria: '240.817',
    imagem: require('./assets/yasuo1.jpg'),
    sinopse: "Yasuo é um espadachim do jogo League of Legends. Ele usa vento para lutar, tem muita mobilidade e pode bloquear projéteis com uma parede de vento. É forte quando acerta combos e críticos, mas é difícil de jogar bem.",
    url: "https://universe.leagueoflegends.com/pt_BR/story/champion/yasuo/"
  },
  {
    id: 2,
    nome: 'Ekko',
    lancamento: '29 de maio de 2015.',
    genero: 'Jungle/Mid',
    maestria: '230.142',
    imagem: require('./assets/ekko.jpg'),
    sinopse: "Ekko é um jovem inventor de Zaun no jogo League of Legends. Ele usa tecnologia para manipular o tempo, podendo voltar alguns segundos para evitar morrer ou refazer uma jogada. É rápido e causa bastante dano quando acerta o combo.",
    url: "https://universe.leagueoflegends.com/pt_BR/champion/ekko/"
  },
  {
    id: 3,
    nome: 'Swain',
    lancamento: '5 de outubro de 2010.',
    genero: 'Mid/Support',
    maestria: '154.081',
    imagem: require('./assets/swain.jpg'),
    sinopse: "Swain é um poderoso líder de Noxus no jogo League of Legends. Ele usa magia sombria e corvos para drenar vida dos inimigos e ficar mais forte nas lutas.",
    url: "https://universe.leagueoflegends.com/pt_BR/champion/swain/"
  },
  {
    id: 4,
    nome: 'Samira',
    lancamento: '21 de setembro de 2020.',
    genero: 'ADC',
    maestria: '122.917',
    imagem: require('./assets/Samira.jpg'),
    sinopse: "Samira é uma atiradora extremamente agressiva e estilosa, que usa pistolas e espada para lutar. Ela gosta de combates arriscados e fica mais forte conforme encadeia habilidades diferentes para aumentar seu estilo de luta.",
    url: "https://universe.leagueoflegends.com/pt_BR/champion/samira/"
  },
  {
    id: 5,
    nome: 'Rengar',
    lancamento: '21 de agosto de 2012.',
    genero: 'Jungle/Top',
    maestria: '101.427',
    imagem: require('./assets/rengar.jpg'),
    sinopse: "Rengar é um caçador feroz da selva, parecido com um leão, que adora caçar inimigos fortes para provar sua força. Ele usa furtividade e saltos rápidos para eliminar os adversários.",
    url: "https://universe.leagueoflegends.com/pt_BR/champion/rengar/"
  },
  {
    id: 6,
    nome: 'Udyr',
    lancamento: '2 de dezembro de 2009.',
    genero: 'Jungle',
    maestria: '97.477',
    imagem: require('./assets/udyr.jpg'),
    sinopse: "Udyr é um guerreiro espiritual que luta usando posturas de animais, ganhando habilidades diferentes como força, velocidade e resistência.",
    url: "https://universe.leagueoflegends.com/pt_BR/champion/udyr/"
  }
];

export default function App() {

  const criaItem = ({ item }) => {
    const isWendriu = item.nome === 'Wendriu';
    const isEkko = item.nome === 'Ekko';

    return (
      <TouchableOpacity 
        style={styles.listaItem} 
        onPress={() => 
          Alert.alert(
            isWendriu ? 'Perfil' : 'Lore', 
            item.sinopse, 
            [
              {
                text: isWendriu ? 'VER OP.GG' : 'Ler Lore', 
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
          
          <Text style={styles.textoForte}>{isWendriu ? 'Jogador: ' : 'Campeão: '}<Text style={styles.textoNormal}>{item.nome}</Text></Text>
          <Text style={styles.textoForte}>{isWendriu ? 'Joga desde: ' : 'Lançamento: '}<Text style={styles.textoNormal}>{item.lancamento}</Text></Text>
          <Text style={styles.textoForte}>{isWendriu ? 'Rotas preferidas: ' : 'Rota: '}<Text style={styles.textoNormal}>{item.genero}</Text></Text>
          <Text style={styles.textoForte}>{isWendriu ? 'Main atual: ' : 'Maestria: '}<Text style={styles.textoNormal}>{item.maestria}</Text></Text>     
        </View>

      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto"/>
      <Text style={styles.titulo}>Mains LOL</Text>

      <FlatList 
        data={Campeoes} 
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