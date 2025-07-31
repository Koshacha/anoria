export default function useContacts() {
  const { contacts } = useAppConfig();

  const phoneLink = `tel:${contacts.phone.replace(/\D/g, "")}`;
  const emailLink = `mailto:${contacts.email}`;

  return {
    ...contacts,
    phoneLink,
    emailLink,
  };
}
