import { Component, Input, OnInit } from "@angular/core";
import { FusionDataService } from "./fusion-data.service";

@Component({
  selector: "fusion",
  templateUrl: "./fusion.component.html",
  styleUrls: ["./fusion.component.css"]
})
export class FusionComponent implements OnInit {
  @Input() championName: string;
  totalCost: {
      arcane: {
        lesser: 0,
        greater: 0,
        superior: 0
      },
      spirit: {
        lesser: 0,
        greater: 0,
        superior: 0
      },
      magic: {
        lesser: 0,
        greater: 0,
        superior: 0
      },
      force: {
        lesser: 0,
        greater: 0,
        superior: 0
      },
      void: {
        lesser: 0,
        greater: 0,
        superior: 0
      }
    };
  champion: any;
  costs: any;
  constructor(public fusionDataService: FusionDataService) {}

  ngOnInit() {
    this.fusionDataService.loadData();
    this.champion = this.fusionDataService.getChampion(this.championName);
    this.costs = this.fusionDataService.getCosts();
    this.calculateCost();
  }
  calculateCost() {
    this.totalCost = {
      arcane: {
        lesser: 0,
        greater: 0,
        superior: 0
      },
      spirit: {
        lesser: 0,
        greater: 0,
        superior: 0
      },
      magic: {
        lesser: 0,
        greater: 0,
        superior: 0
      },
      force: {
        lesser: 0,
        greater: 0,
        superior: 0
      },
      void: {
        lesser: 0,
        greater: 0,
        superior: 0
      }
    };
    this.champion.champions.forEach(champion => {
      this.addCostChampion(champion);
    });
    this.fusionDataService.saveData();
  }
  addCostChampion(champion) {
    for (let ascension = champion.ascension; ascension < champion.ascensionRequired; ascension++) {
      this.addCostArcane(champion, ascension);
      this.addCostAffinity(champion, ascension,champion.affinity.toLowerCase());
    }
    if (champion.champions) {
      champion.champions.forEach(son => {
        this.addCostChampion(son);
      });
    }
  }
  addCostArcane(champion, ascension) {
    if (champion.rarity === "Epic") {
      let cost = this.costs.epic["ascension" + ascension];
      if (cost.arcane.lesser) {
        this.totalCost["arcane"].lesser += cost.arcane.lesser;
      }
      if (cost.arcane.greater) {
        this.totalCost["arcane"].greater += cost.arcane.greater;
      }
      if (cost.arcane.superior) {
        this.totalCost["arcane"].superior += cost.arcane.superior;
      }
    } else if (champion.rarity === "Rare") {
      let cost = this.costs.rare["ascension" + ascension];
      if (cost.arcane.lesser) {
        this.totalCost["arcane"].lesser += cost.arcane.lesser;
      }
      if (cost.arcane.greater) {
        this.totalCost["arcane"].greater += cost.arcane.greater;
      }
      if (cost.arcane.superior) {
        this.totalCost["arcane"].superior += cost.arcane.superior;
      }
    }
  }
  addCostAffinity(champion, ascension, affinity) {
    if (champion.rarity === "Epic") {
      let cost = this.costs.epic["ascension" + ascension];
      if (cost.affinity.lesser) {
        this.totalCost[affinity].lesser += cost.affinity.lesser;
      }
      if (cost.affinity.greater) {
        this.totalCost[affinity].greater += cost.affinity.greater;
      }
      if (cost.affinity.superior) {
        this.totalCost[affinity].superior += cost.affinity.superior;
      }
    } else if (champion.rarity === "Rare") {
      let cost = this.costs.rare["ascension" + ascension];
      if (cost.affinity.lesser) {
        this.totalCost[affinity].lesser += cost.affinity.lesser;
      }
      if (cost.affinity.greater) {
        this.totalCost[affinity].greater += cost.affinity.greater;
      }
      if (cost.affinity.superior) {
        this.totalCost[affinity].superior += cost.affinity.superior;
      }
    }
  }
}
