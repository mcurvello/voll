const sections = [
  {
    id: 1,
    title: "Insira alguns dados básicos:",
    input: [
      {
        id: 1,
        label: "Nome",
        placeholder: "Digite seu nome completo",
        name: "nome",
      },
      {
        id: 2,
        label: "Email",
        placeholder: "Insira seu endereço de email",
        name: "email",
      },
      {
        id: 3,
        label: "Crie uma senha",
        placeholder: "Insira sua senha",
        secureTextEntry: true,
        name: "senha",
      },
      {
        id: 4,
        label: "Repita a senha",
        placeholder: "Insira sua senha",
        secureTextEntry: true,
        name: "confirmaSenha",
      },
      {
        id: 5,
        label: "CPF",
        placeholder: "Insira seu CPF",
        name: "cpf",
      },
      {
        id: 6,
        label: "Foto de perfil",
        placeholder: "Link da foto",
        name: "imagem",
      },
    ],
    checkbox: [],
  },
  {
    id: 2,
    title: "Agora, mais alguns dados sobre você:",
    input: [
      {
        id: 1,
        label: "CEP",
        placeholder: "Insira seu CEP",
        name: "cep",
      },
      {
        id: 2,
        label: "Rua",
        placeholder: "Nome da rua",
        name: "rua",
      },
      {
        id: 3,
        label: "Número",
        placeholder: "Insira seu número",
        name: "numero",
      },
      {
        id: 4,
        label: "Complemento",
        placeholder: "Insira seu complemento",
        name: "complemento",
      },
      {
        id: 5,
        label: "Telefone",
        placeholder: "(00) 00000-0000",
        name: "telefone",
      },
      {
        id: 5,
        label: "Estado",
        placeholder: "Seu Estado",
        name: "estado",
      },
    ],
    checkbox: [],
  },
  {
    id: 3,
    title: "Para finalizar, quais são os seus planos?",
    input: [],
    checkbox: [
      {
        id: 1,
        value: "Sulamerica",
      },
      {
        id: 2,
        value: "Unimed",
      },
      {
        id: 3,
        value: "Bradesco",
      },
      {
        id: 4,
        value: "Amil",
      },
      {
        id: 5,
        value: "Biosaúde",
      },
      {
        id: 6,
        value: "Biovida",
      },
      {
        id: 7,
        value: "Outros",
      },
    ],
  },
];

export { sections };
