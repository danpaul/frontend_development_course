```mermaid
flowchart TD
    A["UI renders"] --> B["User interacts / triggers event"]
    B --> C["Event handler runs"]
    C --> D["State updates (useState, Context, TanStack Query)"]
    D --> A["UI re-renders with new state"]

```
