import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class FusionDataService {
  costs = {
    rare: {
      ascension0: {
        affinity: {
          lesser: 4
        },
        arcane: {
          lesser: 2
        }
      },
      ascension1: {
        affinity: {
          lesser: 6
        },
        arcane: {
          lesser: 3
        }
      },
      ascension2: {
        affinity: {
          greater: 2
        },
        arcane: {
          greater: 1
        }
      },
      ascension3: {
        affinity: {
          greater: 2
        },
        arcane: {
          greater: 2
        }
      }
    },
    epic: {
      ascension0: {
        affinity: {
          greater: 4
        },
        arcane: {
          greater: 3
        }
      },
      ascension1: {
        affinity: {
          greater: 7
        },
        arcane: {
          greater: 5
        }
      },
      ascension2: {
        affinity: {
          greater: 9
        },
        arcane: {
          greater: 7
        }
      },
      ascension3: {
        affinity: {
          superior: 3
        },
        arcane: {
          superior: 1
        }
      },
      ascension4: {
        affinity: {
          superior: 3
        },
        arcane: {
          superior: 2
        }
      }
    }
  };

  fusions = {
    gurptuk: {
      name: "Gurptuk Moss-Beard",
      imageUrl:
        "https://files.ayumilove.net/games/raid_shadow_legends/avatar/Gurptuk_Moss_Beard.png",
      ayumiUrl: "",
      affinity: "Force",
      rarity: "Legendary",
      raidCortexUrl: "",
      champions: [
        {
          name: "Fang Cleric",
          imageUrl:
            "https://files.ayumilove.net/games/raid_shadow_legends/avatar/Fang_Cleric.png",
          ayumiUrl: "",
          raidCortexUrl: "",
          affinity: "Spirit",
          rarity: "Epic",
          ascensionRequired: 5,
          ascension: 0,
          obtain: {
            event: "Champion Training Event",
            date: "12/05/20 ~ 25/05/20"
          },
          champions: [
            {
              name: "Hatchet Slinger",
              imageUrl:
                "https://files.ayumilove.net/games/raid_shadow_legends/avatar/Hatchet_Slinger.png",
              ayumiUrl: "",
              raidCortexUrl: "",
              rarity: "Rare",
              ascensionRequired: 4,
              ascension: 0,
              obtain: {
                event: "Champion Training Event",
                date: "12/05/20 ~ 25/05/20"
              },
              affinity: "Spirit"
            },
            {
              name: "Cudgeler",
              imageUrl:
                "https://files.ayumilove.net/games/raid_shadow_legends/avatar/Cudgeler.png",
              ayumiUrl: "",
              raidCortexUrl: "",
              rarity: "Rare",
              ascensionRequired: 4,
              ascension: 0,
              obtain: {
                event: "Dragon Tournament",
                date: "12/05/20 ~ 14/05/20"
              },
              affinity: "Magic"
            },
            {
              name: "Twinclaw Disciple",
              imageUrl:
                "https://files.ayumilove.net/games/raid_shadow_legends/avatar/Twinclaw_Disciple.png",
              ayumiUrl: "",
              raidCortexUrl: "",
              rarity: "Rare",
              ascensionRequired: 4,
              ascension: 0,
              obtain: {
                event: "Artifact Enhancement Event I",
                date: "16/05/20 ~ 18/05/20"
              },
              affinity: "Force"
            },
            {
              name: "Haruspex",
              imageUrl:
                "https://files.ayumilove.net/games/raid_shadow_legends/avatar/Haruspex.png",
              ayumiUrl: "",
              raidCortexUrl: "",
              rarity: "Rare",
              ascensionRequired: 4,
              ascension: 0,
              obtain: {
                event: "Dungeon Divers Event",
                date: "13/05/20 ~ 22/05/20"
              },
              affinity: "Void"
            }
          ]
        },
        {
          name: "Catacomb Councilor",
          imageUrl:
            "https://files.ayumilove.net/games/raid_shadow_legends/avatar/Catacomb_Councilor.png",
          ayumiUrl: "",
          raidCortexUrl: "",
          rarity: "Epic",
          affinity: "Magic",
          ascensionRequired: 5,
          ascension: 0,
          obtain: {
            event: " ",
            date: " "
          },
          champions: [
            {
              name: "Soulbond Bowyer",
              imageUrl:
                "https://files.ayumilove.net/games/raid_shadow_legends/avatar/Soulbond_Bowyer.png",
              ayumiUrl: "",
              raidCortexUrl: "",
              rarity: "Rare",
              ascensionRequired: 4,
              ascension: 0,
              obtain: {
                event: "Champion Training Event",
                date: "12/05/20 ~ 25/05/20"
              },
              affinity: "Spirit"
            },
            {
              name: "Myrmidon",
              imageUrl:
                "https://files.ayumilove.net/games/raid_shadow_legends/avatar/Myrmidon.png",
              ayumiUrl: "",
              raidCortexUrl: "",
              rarity: "Rare",
              ascensionRequired: 4,
              ascension: 0,
              obtain: {
                event: "Ice Golem Tournament",
                date: "18/05/20 ~ 20/05/20"
              },
              affinity: "Magic"
            },
            {
              name: "Fencer",
              imageUrl:
                "https://files.ayumilove.net/games/raid_shadow_legends/avatar/Fencer.png",
              ayumiUrl: "",
              raidCortexUrl: "",
              rarity: "Rare",
              ascensionRequired: 4,
              ascension: 0,
              obtain: {
                event: "Artifact Enhancement Event II",
                date: "22/05/20 ~ 24/05/20"
              },
              affinity: "Force"
            },
            {
              name: "Ragemonger",
              imageUrl:
                "https://files.ayumilove.net/games/raid_shadow_legends/avatar/Ragemonger.png",
              ayumiUrl: "",
              raidCortexUrl: "",
              rarity: "Rare",
              ascensionRequired: 4,
              ascension: 0,
              obtain: {
                event: "Dungeon Divers Event",
                date: "13/05/20 ~ 22/05/20"
              },
              affinity: "Void"
            }
          ]
        },
        {
          name: "Seneschal",
          imageUrl:
            "https://files.ayumilove.net/games/raid_shadow_legends/avatar/Seneschal.png",
          ayumiUrl: "",
          raidCortexUrl: "",
          affinity: "Force",
          rarity: "Epic",
          ascensionRequired: 5,
          ascension: 0,
          obtain: {
            event: "Dungeon Divers Event",
            date: "13/05/20 ~ 22/05/20"
          },
          champions: [
            {
              name: "Corpulent Cadaver",
              imageUrl:
                "https://files.ayumilove.net/games/raid_shadow_legends/avatar/Corpulent_Cadaver.png",
              ayumiUrl: "",
              raidCortexUrl: "",
              rarity: "Rare",
              ascensionRequired: 4,
              ascension: 0,
              obtain: {
                event: "Champion Training Event",
                date: "12/05/20 ~ 25/05/20"
              },
              affinity: "Spirit"
            },
            {
              name: "Frozen Banshee",
              imageUrl:
                "https://files.ayumilove.net/games/raid_shadow_legends/avatar/Frozen_Banshee.png",
              ayumiUrl: "",
              raidCortexUrl: "",
              ascensionRequired: 4,
              rarity: "Rare",
              ascension: 0,
              obtain: {
                event: "Spider Tournament",
                date: "15/05/20 ~ 17/05/20"
              },
              affinity: "Magic"
            },
            {
              name: "Beast Wrestler",
              imageUrl:
                "https://files.ayumilove.net/games/raid_shadow_legends/avatar/Beast_Wrestler.png",
              ayumiUrl: "",
              raidCortexUrl: "",
              rarity: "Rare",
              ascensionRequired: 4,
              ascension: 0,
              obtain: {
                event: "Artifact Enhancement Event I",
                date: "16/05/20 ~ 18/05/20"
              },
              affinity: "Force"
            },
            {
              name: "Painsmith",
              imageUrl:
                "https://files.ayumilove.net/games/raid_shadow_legends/avatar/Painsmith.png",
              ayumiUrl: "",
              raidCortexUrl: "",
              rarity: "Rare",
              ascensionRequired: 4,
              ascension: 0,
              obtain: {
                event: "Summon Rush Event",
                date: "13/05/20 ~ 15/05/20"
              },
              affinity: "Void"
            }
          ]
        },
        {
          name: "Umbral Enchantress",
          imageUrl:
            "https://files.ayumilove.net/games/raid_shadow_legends/avatar/Umbral_Enchantress.png",
          ayumiUrl: "",
          raidCortexUrl: "",
          affinity: "Void",
          rarity: "Epic",
          ascensionRequired: 5,
          ascension: 0,
          obtain: {
            event: "Summon Rush Event",
            date: "13/05/20 ~ 15/05/20"
          },
          champions: [
            {
              name: "Ghoulish Ranger",
              imageUrl:
                "https://files.ayumilove.net/games/raid_shadow_legends/avatar/Ghoulish_Ranger.png",
              ayumiUrl: "",
              raidCortexUrl: "",
              ascensionRequired: 4,
              rarity: "Rare",
              ascension: 0,
              obtain: {
                event: "Champion Training Event",
                date: "12/05/20 ~ 25/05/20"
              },
              affinity: "Spirit"
            },
            {
              name: "Bombardier",
              imageUrl:
                "https://files.ayumilove.net/games/raid_shadow_legends/avatar/Bombardier.png",
              ayumiUrl: "",
              raidCortexUrl: "",
              ascensionRequired: 4,
              rarity: "Rare",
              ascension: 0,
              obtain: {
                event: "Fire Knight Tournament",
                date: "21/05/20 ~ 23/05/20"
              },
              affinity: "Force"
            },
            {
              name: "Perforator",
              imageUrl:
                "https://files.ayumilove.net/games/raid_shadow_legends/avatar/Perforator.png",
              ayumiUrl: "",
              raidCortexUrl: "",
              ascensionRequired: 4,
              rarity: "Rare",
              ascension: 0,
              obtain: {
                event: "Arena Onslaught Tournament",
                date: "15/05/20 ~ 18/05/20"
              },
              affinity: "Force"
            },
            {
              name: "Bulwark",
              imageUrl:
                "https://files.ayumilove.net/games/raid_shadow_legends/avatar/Bulwark.png",
              ayumiUrl: "",
              raidCortexUrl: "",
              ascensionRequired: 4,
              rarity: "Rare",
              ascension: 0,
              obtain: {
                event: "Dungeon Divers Event",
                date: "13/05/20 ~ 22/05/20"
              },
              affinity: "Void"
            }
          ]
        }
      ]
    }
  };
  constructor() {}

  getChampion(name: string): object {
    return this.fusions[name];
  }

  getCosts(): object {
    return this.costs;
  }
  /* Save Data */
  saveData() {
    localStorage.setItem("savedData", JSON.stringify(this.fusions));
    console.log("saved");
  }

  loadData() {
    if (localStorage.getItem("savedData") !== null) {
      this.updateAscensions(JSON.parse(localStorage.getItem("savedData")));
    }
  }

  updateAscensions(savedData) {
    for (const [championId, champion] of Object.entries(savedData)) {
      this.fusions[championId]["champions"] = this.updateAscensionsChampions(
        this.fusions[championId]["champions"],
        champion["champions"]
      );
    }
  }

  updateAscensionsChampions(champions, championsStored) {
    if (championsStored) {
      for (const [key, value] of Object.entries(champions)) {
        champions[key]["ascension"] = championsStored[key]["ascension"];
        if (championsStored[key]["champions"]) {
          champions[key]["champions"] = this.updateAscensionsChampions(
            champions[key]["champions"],
            championsStored[key]["champions"]
          );
        }
      }
      return champions;
    }
  }
}
