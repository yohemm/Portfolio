import React, { useRef } from 'react';
import { WebTechno } from '~/components/WebTechno';
import { TechnosListing } from '~/components/TechnosListing';
import { TitleAnimate } from '~/components/TitleAnimate';
import { useRevealAnim } from '~/elements/hooks';

export function meta() {
  return [
    { title: 'Yohem | Compétences' },
    {
      name: 'description',
      content:
        'Portfolio de Yohem VAXELAIRE, programmeur Web Backend & System ayant pour objectif DevOps.'
    }
  ];
}

export default function Skills() {
  const justification = useRef(null);
  useRevealAnim(justification);

  const skills = useRef(null);
  useRevealAnim(skills);

  const technos = useRef(null);
  useRevealAnim(technos);

  const server = useRef(null);
  useRevealAnim(server);

  return (
    <>
      <section ref={justification}>
        <div className='reveal-opacity'>
          <p>
            J&apos;ai débuté la programmation sur des projets personnels, ce qui m&apos;a permis
            d&apos;apprendre progressivement la chaîne de mise en production.
          </p>
          <p>
            Aujourd&apos;hui, je suis capable de mettre en place un projet intégrant des pipelines
            CI/CD avec GitHub Actions, permettant de gérer le versioning des releases,
            d&apos;envoyer des images sur des repositories et de déployer le projet sur un serveur.
          </p>
          <p>
            Passionné par le développement système et le backend, j&apos;ai appris à gérer des
            serveurs multi-hébergement avec automatisation des tâches.
          </p>
        </div>
      </section>
      <section ref={skills}>
        <div className='reveal-down'>
          <TitleAnimate>Compétences et spécialisations Web</TitleAnimate>
          <p>
            J&apos;ai choisi de me spécialiser dans Node.js pour le développement backend, car
            j&apos;apprécie son paradigme asynchrone basé sur les callbacks et les promises. Bien
            que le fonctionnement de JavaScript puisse sembler étrange dans certains cas,
            l&apos;usage de TypeScript, ESLint et de tests bien configurés permet de résoudre en
            partie les problèmes intrinsèques au langage.
          </p>
          <p>
            Bien que le backend soit ma priorité, j&apos;ai également appris React.js afin
            d&apos;approfondir un framework frontend. J&apos;ai choisi React non seulement pour sa
            compatibilité avec Node.js, mais aussi pour sa popularité sur le marché professionnel.
            De plus, j&apos;ai été séduit par son système de composants, son mécanisme de rendu et
            sa surcouche du DOM virtuel, qui le rendent particulièrement pratique à utiliser.
          </p>
          <WebTechno
            back={['NodeJS', 'PostGreSQL', 'Express']}
            front={['React', 'TypeScript', 'CSS']}
          />
        </div>
      </section>
      <section ref={technos}>
        <div className='reveal-right'>
          <TitleAnimate>Technologies apprisent lors de l&apos;alternance</TitleAnimate>
          <p>
            Lors de ma licence professionnelle en informatique et de mon apprentissage au sein de la
            polyclinique de Grande-Synthe en tant que technicien réseau, j&apos;ai pu développer mes
            compétences sur les serveurs Windows, notamment Active Directory (AD), les GPO, les
            applications RDS et les serveurs IIS. J&apos;ai également découvert les réseaux
            d&apos;entreprise ainsi que les normes de sécurité informatique, en participant
            notamment à la refonte architecturale du réseau.
          </p>
          <TechnosListing technos={['Active Directory', 'PowerShell', 'GPO', 'RDS', 'IIS']} />
        </div>
      </section>
      <section ref={server} className='reveal-right'>
        <div className='reveal-left'>
          <TitleAnimate>Mise en Place de Serveurs</TitleAnimate>
          <p>
            Lorsque je réalisais mes premiers projets personnels, je me suis heurté à un problème de
            mise en production, car je ne disposais pas de serveur. Pour y remédier, j&apos;ai loué
            un VPS et configuré le système afin de gérer mes applications.
          </p>
          <p>
            J&apos;ai mis en place Docker, avec un docker-compose par application, chaque
            application contenant plusieurs conteneurs. Les applications accessibles depuis
            l&apos;extérieur sont gérées par un reverse-proxy Nginx sur un conteneur Docker, associé
            à Certbot pour gérer automatiquement les certificats Let&apos;s Encrypt. Cette
            configuration est automatisée via un script Bash, utilisant des variables
            d&apos;environnement pour gérer les domaines.
          </p>
          <p>
            Enfin, j&apos;ai mis en place un réseau de supervision et de monitoring sur mes
            docker-compose, me permettant de surveiller les ressources et le trafic de chaque
            conteneur.
          </p>
          <TechnosListing
            technos={[
              'Nginx',
              'Docker',
              'Git',
              'Grafana',
              'Prometheus',
              'CertBot',
              'Postfix',
              'Zone DNS'
            ]}
          />
        </div>
      </section>
    </>
  );
}
