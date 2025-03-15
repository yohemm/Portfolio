# Compétances

Competances:

- Git
- github
- CI-CD pipeline
- NodeJs
- React
- Testing
- Programmation systeme bash et powershell
- mise en place de serveur
- herbergement
- DNS
- Docker
- Nginx
- Cerbot
- outils de supervision et monitoring
- Configuration d'equipement reseau

J'ai débuté la programmation sur des projets personnels, ce qui m'a permis d'apprendre progressivement la chaîne de mise en production.
Aujourd'hui, je suis capable de mettre en place un projet intégrant des pipelines CI/CD avec GitHub Actions, permettant de gérer le versioning des releases, d'envoyer des images sur des repositories et de déployer le projet sur un serveur.
Passionné par le développement système et le backend, j'ai appris à gérer des serveurs multi-hébergement avec automatisation des tâches.

J'ai choisi de me spécialiser dans Node.js pour le développement backend, car j'apprécie son paradigme asynchrone basé sur les callbacks et les promises. Bien que le fonctionnement de JavaScript puisse sembler étrange dans certains cas, l'usage de TypeScript, ESLint et de tests bien configurés permet de résoudre en partie les problèmes intrinsèques au langage.
Bien que le backend soit ma priorité, j'ai également appris React.js afin d'approfondir un framework frontend. J'ai choisi React non seulement pour sa compatibilité avec Node.js, mais aussi pour sa popularité sur le marché professionnel. De plus, j'ai été séduit par son système de composants, son mécanisme de rendu et sa surcouche du DOM virtuel, qui le rendent particulièrement pratique à utiliser.

Lors de ma licence professionnelle en informatique et de mon apprentissage au sein de la polyclinique de Grande-Synthe en tant que technicien réseau, j'ai pu développer mes compétences sur les serveurs Windows, notamment Active Directory (AD), les GPO, les applications RDS et les serveurs IIS. J'ai également découvert les réseaux d'entreprise ainsi que les normes de sécurité informatique, en participant notamment à la refonte architecturale du réseau.

Lorsque je réalisais mes premiers projets personnels, je me suis heurté à un problème de mise en production, car je ne disposais pas de serveur. Pour y remédier, j'ai loué un VPS et configuré le système afin de gérer mes applications.
J'ai mis en place Docker, avec un docker-compose par application, chaque application contenant plusieurs conteneurs. Les applications accessibles depuis l'extérieur sont gérées par un reverse-proxy Nginx sur un conteneur Docker, associé à Certbot pour gérer automatiquement les certificats Let's Encrypt. Cette configuration est automatisée via un script Bash, utilisant des variables d'environnement pour gérer les domaines.
Enfin, j'ai mis en place un réseau de supervision et de monitoring sur mes docker-compose, me permettant de surveiller les ressources et le trafic de chaque conteneur.
