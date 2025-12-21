import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-services-grid',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services-grid.html',
  styleUrl: './services-grid.css'
})
export class ServicesGridComponent {
  services = [
    {
      icon: 'architecture',
      image: 'assets/images/service/entwurf.jpg',
      title: 'Entwurf und Konzept',
      description: 'Ausgehend von der Analyse von Ort, Nutzung und Rahmenbedingungen entwickeln wir architektonische Konzepte mit klarer räumlicher und konstruktiver Idee. Der Entwurf bildet die Grundlage für alle weiteren Planungsschritte.'
    },
    {
      icon: 'description',
      title: 'Genehmigungs- und Ausführungsplanung',
      description: 'Wir übersetzen den Entwurf in eine präzise und genehmigungsfähige Planung. Dabei legen wir besonderen Wert auf klare Details, eine sorgfältige Abstimmung aller Beteiligten und eine wirtschaftlich sinnvolle Umsetzung.'
    },
    {
      icon: 'construction',
      title: 'Bauleitung und Projektbegleitung',
      description: 'Während der Ausführung begleiten wir das Projekt kontinuierlich und sichern die Umsetzung der planerischen und gestalterischen Ziele. Qualität, Kosten und Termine werden dabei verantwortungsvoll koordiniert.'
    },
    {
      icon: 'home_work',
      title: 'Umbau und Weiterbauen im Bestand',
      description: 'Ein besonderer Schwerpunkt unserer Arbeit liegt im Umgang mit bestehender Bausubstanz. Durch sorgfältige Analyse und gezielte Eingriffe entwickeln wir nachhaltige Lösungen, die den Bestand respektieren und weiterdenken.'
    }
  ];
}

