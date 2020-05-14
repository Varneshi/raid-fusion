import { Component, Input, Output, EventEmitter, OnInit } from "@angular/core";

@Component({
  selector: "champion",
  templateUrl: "./champion.component.html",
  styleUrls: ["./champion.component.css"]
})
export class ChampionComponent implements OnInit {
  @Input() champion;
  @Output() calculateCost: EventEmitter<void> = new EventEmitter();
  rarity: string;
  affinity: string;
  constructor() {}

  ngOnInit() {
    this.rarity = this.champion.rarity;
    this.affinity = this.champion.affinity;
  }

  setascension(ascension: number) {
    if (this.champion.ascension == ascension) {
      this.champion.ascension = 0;
    } else {
      this.champion.ascension = ascension;
    }
    this.calculateCost.emit();
  }
}
