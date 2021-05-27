import React from "react";
import "./styles/project.css";

import previewProceduralGeneration from "../images/projects/ProceduralGeneration_2019.png";

function Projects() {
  return (
    <div class="projects">
      <h1>Projects</h1>

      <section class="project">
        <h2>Unity CI Test Project (2021)</h2>
        <p class="explanation">
          This project is an attempt to use Github actions to setup a Unity
          Project with Continuous Integration. It uses existing actions to setup
          the workflow to run Unit Tests and then build for multiple platforms.
        </p>
        <div class="project-links">
          <ul>
            <li>
              <a
                href="https://github.com/ImInfenix/UnityCI_TestProject"
                class="box-link"
              >
                Github Repository
              </a>
            </li>
            <li>
              <img
                src="https://img.shields.io/github/workflow/status/ImInfenix/UNITYCI_TestProject/CI?color=%23D2691E&style=for-the-badge"
                alt="CI Status"
              />
            </li>
          </ul>
        </div>
      </section>

      <section class="project">
        <h2>Currency tracker (2020 - 2021)</h2>
        <img
          class="splash"
          src="https://cdn-eso.mmoui.com/preview/pvw9819.png"
          alt="Add-On Preview"
        />
        <p class="subtitle">
          On the right, additional informations about certains currency of the
          game (owned quantity)
        </p>
        <p class="explanation">
          Currency tracker is an Add-On for
          <a href="https://www.elderscrollsonline.com/fr/home" class="credit">
            The Elder Scrolls Online
          </a>
          . This Add-On uses the game API to track specials currencies of the
          games to warn the player when it reaches a user-defined threshold. The
          Add-On is written in LUA scripting language.
        </p>
        <div class="project-links">
          <ul>
            <li>
              <a
                href="https://github.com/ImInfenix/CurrencyTracker"
                class="box-link"
              >
                Github Repository
              </a>
            </li>
            <li>
              <a
                href="https://www.esoui.com/downloads/info2838-CurrencyTracker.html"
                class="box-link"
              >
                Add-On Page
              </a>
            </li>
          </ul>
        </div>
      </section>

      <section class="project">
        <h2>Procedural Generation Initiation (2019)</h2>
        <img
          class="splash"
          src={previewProceduralGeneration}
          alt="The generated maze"
        />
        <p class="subtitle">A grid map procedurally generated</p>
        <p class="explanation">
          This project was an attempt to create a procedural map. It is a small
          game with a simple movement where the goal is to reach the red room,
          leading to the end. It is then possible to play again, increasing the
          size of the map. Each room is a square with one to four entries, and
          all of these rooms are linked together. The red room is one of the
          map's rooms, randomly selected.
        </p>
        <div class="project-links">
          <ul>
            <li>
              <a
                href="https://docs.google.com/uc?export=download&id=1QUIFoOgfxLMo3PGQBncHW3XMgeOCj1xs"
                class="box-link"
              >
                Direct download (Game)
              </a>
            </li>
            <li>
              <a
                href="https://docs.google.com/uc?export=download&id=1nqcICxXahL-GJkwMgA5JRHlgdDcpFafC"
                class="box-link"
              >
                Direct download (Project)
              </a>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default Projects;
