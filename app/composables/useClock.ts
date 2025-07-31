export default function useClock() {
  const { baseDate } = useAppConfig();
  const baseDateTimestamp = new Date(baseDate).getTime();
  const timestamp = useTimestamp({ offset: 0 });
  const visitTimestamp = useSessionStorage("visitTimestamp", new Date().getTime());

  const daysSinceBaseDate = Math.floor(
    (timestamp.value - baseDateTimestamp) / (1000 * 60 * 60 * 24)
  );

  const secondsSinceVisit = computed(() => {
    return Math.floor((timestamp.value - visitTimestamp.value) / 1000);
  })

  return {
    daysSinceBaseDate,
    secondsSinceVisit,
  };
}
