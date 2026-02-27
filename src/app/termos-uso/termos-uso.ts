import { Component, EventEmitter, Output } from '@angular/core';

export interface TermoSecao {
  titulo: string;
  textosIniciais: string[];
  topicosLista?: string[];
  itensNumerados?: string[];
  textosFinais?: string[];
}

@Component({
  selector: 'app-termos-uso',
  imports: [],
  templateUrl: './termos-uso.html'
})
export class TermosUso {
  @Output() fechou = new EventEmitter<void>();
  @Output() aceitou = new EventEmitter<void>();

  secoesTermos: TermoSecao[] = [
    {
      titulo: 'Introdução',
      textosIniciais: [
        'A privacidade dos visitantes e clientes ao nosso site é muito importante para nós, e estamos comprometidos em protegê-la. Esta política explica o que faremos com suas informações pessoais.',
        'Consentir com o uso de cookies de acordo com os termos desta política, quando você acessa nosso site pela primeira vez nos permite usar cookies toda vez que você acessar nosso site.'
      ]
    },
    {
      titulo: 'Coleta de informações pessoais',
      textosIniciais: [
        'Os seguintes tipos de informações pessoais podem ser coletados, armazenados e usados, nas seguintes informações:'
      ],
      topicosLista: [
        'Sobre o seu computador, incluindo seu endereço IP, localização geográfica, tipo e versão do navegador e sistema operacional;',
        'Sobre suas visitas e uso deste site, incluindo fonte de referência, duração da visita, visualizações de página e caminhos de navegação no site;',
        'Endereço de e-mail, que você digita quando se registra em nosso site;',
        'O que você digita ao criar um perfil em nosso site - por exemplo, seu nome, fotos de perfil, sexo, data de nascimento, status de relacionamento, interesses e hobbies, informações educacionais e de emprego;',
        'Como seu nome e endereço de e-mail, que você digita para configurar assinaturas de nossos e-mails e/ou newsletters;',
        'O que você digita durante o uso dos serviços em nosso site;',
        'Geradas ao usar nosso site, incluindo quando, com que frequência e em que circunstâncias você o utiliza;',
        'Relacionadas a tudo o que você compra, serviços que usa ou transações que realiza através do nosso site, incluindo nome, endereço, número de telefone, endereço de e-mail, financeiras, econômicas e patrimoniais;',
        'O que você publica em nosso site com a intenção de publicá-las na internet, incluindo seu nome de usuário, fotos de perfil e o conteúdo de suas publicações;',
        'Contidas em quaisquer comunicações que você nos envia por e-mail ou através de nosso site, incluindo o conteúdo e os métodos da comunicação;',
        'Qualquer outra informação pessoal que você nos enviar.'
      ]
    },
    {
      titulo: 'Consentimento',
      textosIniciais: [
        'É a partir do seu consentimento que tratamos os seus dados pessoais. O consentimento é a manifestação livre, informada e inequívoca pela qual você autoriza a <strong class="font-bold text-gray-800">RC4VC</strong> a tratar seus dados.',
        'Assim, em consonância com a Lei Geral de Proteção de Dados, seus dados só serão coletados, tratados e armazenados mediante prévio e expresso consentimento.',
        'O seu consentimento será obtido de forma específica para cada finalidade acima descrita, evidenciando o compromisso de transparência e boa-fé da <strong class="font-bold text-gray-800">RC4VC</strong> para com seus usuários/clientes, seguindo as regulações legislativas pertinentes.',
        'Ao utilizar os serviços da <strong class="font-bold text-gray-800">RC4VC</strong> e fornecer seus dados pessoais, você está ciente e consentindo com as disposições desta Política de Privacidade, além de conhecer seus direitos e como exercê-los.',
        'A qualquer tempo e sem nenhum custo, você poderá revogar seu consentimento.',
        'É importante destacar que a revogação do consentimento para o tratamento dos dados pode implicar a impossibilidade da performance adequada de alguma funcionalidade do site que dependa da operação.'
      ]
    },
    {
      titulo: 'Direitos e obrigações',
      textosIniciais: [
        'A <strong class="font-bold text-gray-800">RC4VC</strong> assegura a seus usuários/clientes seus direitos de titular previstos no artigo 18 da Lei Geral de Proteção de Dados. Dessa forma, você pode, de maneira gratuita e a qualquer tempo:'
      ],
      topicosLista: [
        'Confirmar a existência de tratamento de dados, de maneira simplificada ou em formato claro e completo.',
        'Acessar seus dados, podendo solicitá-los em uma cópia legível sob forma impressa ou por meio eletrônico, seguro e idôneo.',
        'Corrigir seus dados, ao solicitar a edição, correção ou atualização destes.',
        'Limitar seus dados quando desnecessários, excessivos ou tratados em desconformidade com a legislação através da anonimização, bloqueio ou eliminação.',
        'Solicitar a portabilidade de seus dados, através de um relatório de dados cadastrais que a (nome empresarial simplificado) trata a seu respeito.',
        'Eliminar seus dados tratados a partir de seu consentimento, exceto nos casos previstos em lei.',
        'Revogar seu consentimento, desautorizando o tratamento de seus dados.',
        'Informar-se sobre a possibilidade de não fornecer seu consentimento e sobre as consequências da negativa.'
      ]
    },
    {
      titulo: 'Informações pessoais',
      textosIniciais: [
        'As informações pessoais que nos são enviadas por meio de nosso site serão usadas para os fins especificados nesta política ou nas páginas relevantes do site. Podemos usar suas informações pessoais para as seguintes finalidades:'
      ],
      topicosLista: [
        'Administrar nosso site e nossos negócios;',
        'Personalizar nosso site para você;',
        'Possibilitar o uso dos serviços disponíveis em nosso site;',
        'Enviar produtos adquiridos através do nosso site;',
        'Prestar serviços adquiridos através do nosso site;',
        'Enviar extratos, faturas e lembretes de pagamento, bem como coletar seus pagamentos;',
        'Enviar comunicações comerciais de marketing;',
        'Enviar notificações por e-mail solicitadas especificamente por você;',
        'Enviar nossa newsletter por e-mail, caso você a tenha solicitado (você pode nos informar a qualquer momento se não quiser mais receber a newsletter);',
        'Enviar comunicações de marketing relacionadas aos nossos negócios ou aos negócios de terceiros cuidadosamente selecionados que acreditamos ser do seu interesse, por correio ou, onde você especificamente concordou com isso, por e-mail ou tecnologia semelhante;',
        'Fornecer a terceiros informações estatísticas sobre nossos usuários (mas esses terceiros não poderão identificar nenhum usuário individual a partir dessas informações);',
        'Lidar com perguntas e reclamações feitas por você ou sobre você em relação ao nosso site;',
        'Manter nosso site seguro e evitar fraudes;',
        'Verificar a conformidade com os termos e condições que regem o uso do nosso site; e',
        'Outros usos.'
      ],
      textosFinais: [
        'Se você enviar informações pessoais para publicação em nosso site, publicaremos e usaremos essas informações de acordo com a licença que você nos concedeu.',
        'Suas configurações de privacidade podem ser usadas para limitar a publicação de suas informações em nosso site e ajustadas através do uso de controles de privacidade no site. Sem seu consentimento expresso, não forneceremos suas informações pessoais a terceiros para fins de marketing direto por parte deles ou de terceiros.'
      ]
    },
    {
      titulo: 'Armazenamento e utilização de dados',
      textosIniciais: [
        'Seus dados pessoais coletados pela <strong class="font-bold text-gray-800">RC4VC</strong> serão utilizados e armazenados durante o tempo necessário para a prestação do serviço ou para que as finalidades elencadas na presente Política de Privacidade sejam atingidas, considerando os direitos dos titulares dos dados e dos controladores.',
        'De modo geral, seus dados serão mantidos enquanto a relação contratual entre você e a plataforma perdurar. Findado o período de armazenamento dos dados pessoais, estes serão excluídos de nossas bases de dados ou anonimizados, ressalvadas as hipóteses legalmente previstas no artigo 16 da Lei Geral de Proteção de Dados, a saber:'
      ],
      itensNumerados: [
        'Cumprimento de obrigação legal ou regulatória pelo controlador;',
        'Estudo por órgão de pesquisa, garantida, sempre que possível, a anonimização dos dados pessoais;',
        'Transferência a terceiro, desde que respeitados os requisitos de tratamento de dados dispostos nesta Lei; ou',
        'Uso exclusivo do controlador, vedado seu acesso por terceiro, e desde que anonimizados os dados.'
      ],
      textosFinais: [
        'Isto é, informações pessoais sobre você que sejam imprescindíveis para o cumprimento de determinações legais, judiciais e administrativas e/ou para o exercício do direito de defesa em processos judiciais e administrativas serão mantidas, a despeito da exclusão dos demais dados.',
        'O armazenamento de dados coletados pela <strong class="font-bold text-gray-800">RC4VC</strong> reflete o nosso compromisso com a segurança e privacidade dos seus dados.',
        'Empregamos medidas e soluções técnicas de proteção aptas a garantir a confidencialidade, integridade e inviolabilidade dos seus dados. Além disso, também contamos com medidas de segurança apropriadas aos riscos e com controle de acesso às informações armazenadas.'
      ]
    },
    {
      titulo: 'Segurança da informação',
      textosIniciais: [
        'Para mantermos suas informações pessoais seguras, usamos ferramentas físicas, eletrônicas e gerenciais orientadas para a proteção da sua privacidade.',
        'Você reconhece que as transmissões de informações pela internet são inerentemente inseguras e que não podemos garantir a segurança dos dados enviados pela internet, bem como, que você é responsável por manter em sigilo a senha usada para acessar nosso site; não solicitaremos sua senha (exceto quando você fizer login em nosso site).',
        'Aplicamos essas ferramentas levando em consideração a natureza dos dados pessoais coletados, o contexto e a finalidade do tratamento e os riscos que eventuais violações gerariam para os direitos e liberdades do titular dos dados coletados e tratados.',
        'Entre as medidas que adotamos, destacamos as seguintes:'
      ],
      topicosLista: [
        'Apenas pessoas autorizadas têm acesso a seus dados pessoais;',
        'O acesso a seus dados pessoais é feito somente após o compromisso de confidencialidade;',
        'Seus dados pessoais são armazenados em ambiente seguro e idôneo.'
      ],
      textosFinais: [
        'A <strong class="font-bold text-gray-800">RC4VC</strong> se compromete a adotar as melhores posturas para evitar incidentes de segurança. Contudo, é necessário destacar que nenhuma página virtual é inteiramente segura e livre de riscos. É possível que, apesar de todos os nossos protocolos de segurança, problemas de culpa exclusivamente de terceiros ocorram, como ataques cibernéticos de hackers, ou também em decorrência da negligência ou imprudência do próprio usuário/cliente.',
        'Em caso de incidentes de segurança que possa gerar risco ou dano relevante para você ou qualquer um de nossos usuários/clientes, comunicaremos aos afetados e a Autoridade Nacional de Proteção de Dados sobre o ocorrido, em consonância com as disposições da Lei Geral de Proteção de Dados.'
      ]
    },
    {
      titulo: 'Alteração destes Termos de uso',
      textosIniciais: [
        'A atual versão dos termos de uso e Política de Privacidade foi formulada e atualizada pela última vez em 29 de dezembro de 2021.',
        'Reservamos o direito de modificar os termos de uso e Política de Privacidade a qualquer tempo, principalmente em função da adequação a eventuais alterações feitas em nosso site ou em âmbito legislativo.',
        'Recomendamos que você a revise com frequência.',
        'Eventuais alterações entrarão em vigor a partir de sua publicação em nosso site e sempre lhe notificaremos acerca das mudanças ocorridas.',
        'Ao utilizar nossos serviços e fornecer seus dados pessoais após tais modificações, você as consente.'
      ]
    },
    {
      titulo: 'Cookies',
      textosIniciais: [
        'A <strong class="font-bold text-gray-800">RC4VC</strong> faz uso de Cookies, que são arquivos de texto enviados pela plataforma ao seu computador e que nele se armazenam, que contém informações relacionadas à navegação do site. Em suma, os Cookies são utilizados para aprimorar a experiência de uso.',
        'Ao acessar nosso site e consentir com o uso de Cookies, você manifesta conhecer e aceitar a utilização de um sistema de coleta de dados de navegação com o uso de Cookies em seu dispositivo.',
        'Você pode, a qualquer tempo e sem nenhum custo, alterar as permissões, bloquear ou recusar os Cookies. Todavia, a revogação do consentimento de determinados Cookies pode inviabilizar o funcionamento correto de alguns recursos da plataforma.',
        'Para gerenciar os cookies do seu navegador, basta fazê-lo diretamente nas configurações do navegador, na área de gestão de Cookies.'
      ]
    },
    {
      titulo: 'Encarregado de Proteção de dados (DPO)',
      textosIniciais: [
        'A <strong class="font-bold text-gray-800">RC4VC</strong> disponibiliza os seguintes meios para que você possa entrar em contato conosco para exercer seus direitos de titular: <a href="mailto:contato@navegalgpd.com.br" class="text-[#f05a10] font-bold hover:underline">contato@navegalgpd.com.br</a>.',
        'Caso tenha dúvidas sobre esta Política de Privacidade ou sobre os dados pessoais que tratamos, você pode entrar em contato com o nosso Encarregado de Proteção de Dados Pessoais, através de nossos diversos canais.'
      ]
    }
  ];

  fechar() {
    this.fechou.emit();
  }

  aceitar() {
    this.aceitou.emit();
  }
}
