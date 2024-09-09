export const formFields = [
  {
    name: "fullName",
    label: "Полное имя",
    type: "text",
    placeholder: "Иван Иванов",
  },
  {
    name: "username",
    label: "Username",
    type: "text",
    placeholder: "имя",
  },
  {
    name: "email",
    label: "Email",
    type: "email",
    placeholder: "email@example.com",
  },
  {
    name: "password",
    label: "Пароль",
    type: "password",
    placeholder: "••••••••",
  },
  {
    name: "phone",
    label: "Телефон",
    type: "tel",
    placeholder: "+7234567890",
  },
  {
    name: "telegram",
    label: "Telegram",
    type: "text",
    placeholder: "@telegramhandle",
  },
  {
    name: "status",
    label: "Статус пользователя",
    type: "select",
    options: [
      { value: "active", label: "Активен" },
      { value: "inactive", label: "Неактивен" },
    ],
  },
];

export const headers = [
  { title: "Имя Пользователя", key: "username" },
  { title: "Email", key: "email" },
  { title: "Статус", key: "status" },
  { title: "Дата Регистрации", key: "createdAt" },
];
