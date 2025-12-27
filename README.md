# Hexagonal Architecture (3 Layers)

**Approach:** Pragmatic & High Cohesion.
**Philosophy:** Unlike pure Clean Architecture, this variant groups business logic and data access implementation within a single layer (`internal`). This facilitates rapid development by keeping the "what" (domain) and the "how" (repositories) close together, strictly separating them only from the transport layer (`adapters`) and global configuration (`external`).

## Folder Structure

### 1. Internal (`/src/internal`)
The self-sufficient core. Contains **all** the application intelligence.
Both business rules and the direct implementation of how to persist them reside here.

- **/domain**:
  - Pure business definitions (Entities, Value Objects).
  - Has zero external dependencies.
- **/ports**:
  - **Contracts (Interfaces).**
  - Defines the interfaces that Services and Repositories must fulfill.
  - Used to apply Dependency Inversion within the module.
- **/services**:
  - **Use Cases.**
  - Orchestrates application logic using the domain.
  - Calls repositories located directly in this same `internal` layer.
- **/repositories**:
  - **Data Access Implementation.**
  - Contains the actual code (SQL, Mongo, etc.) that interacts with the DB.
  - *Note:* Placed here to maintain cohesion; a change in service logic often requires an immediate change in the repository query.

### 2. Adapters (`/src/adapters`)
The translation layer ("The Bridge"). Its sole responsibility is to convert external requests into the "language" of the internal layer.

- **/http** (e.g., `/example/create.ts`):
  - **Controllers / Handlers.**
  - Receives the `Request` from the web framework.
  - Extracts parameters and executes the `internal` Service.
  - Returns the `Response` to the client.
  - **Forbidden:** There must be no business logic or SQL queries here.

### 3. External (`/src/external`)
The Infrastructure and Framework layer. This is the life support of the application.

- **/config/DB**:
  - Database connection configuration (Pools, ORM setup).
- **/http**:
  - Server configuration (Express/Fastify), global route definitions, and Middlewares.
- **/rabbitMq** (or other clients):
  - Configuration and initialization of clients for external services.

---

## Data Flow

1. **External** (Server) receives HTTP request -> Routes to **Adapters**.
2. **Adapters** (Controller) translates request -> Calls **Internal** (Service).
3. **Internal** (Service) executes business rules -> Uses **Internal** (Repository) for data.
4. **Internal** (Repository) executes the query using configuration from **External** (Config).
