export function InsurancePlanList({ plans }: { plans: string[] }) {
  return (
    <ul
      className="flex flex-wrap gap-2"
      aria-label="Insurance plans we accept"
    >
      {plans.map((plan) => (
        <li
          key={plan}
          className="rounded-full border border-border bg-card px-4 py-1.5 text-sm font-medium text-foreground"
        >
          {plan}
        </li>
      ))}
      <li className="rounded-full border border-dashed border-border px-4 py-1.5 text-sm text-muted-foreground">
        and many more PPO &amp; HMO plans
      </li>
    </ul>
  );
}
