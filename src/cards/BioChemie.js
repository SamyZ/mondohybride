import React from 'react';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import CardTemplate from '../CardTemplate';

const styles = theme => ({
  paragraph: {
    paddingTop: 10,
    fontSize: '16px',
  },
  subheading: {
    paddingTop: 15,
    fontSize: '18px',
    fontWeight: 500,
  },
});

const BioChemie = ({ classes }) => (
  <CardTemplate headline="Entstehung der DIY Biologie">
    <Typography component="p" className={classes.paragraph}>
      Die Wurzeln der gängigen Methoden der Hundkatzenschweinerein liegen in der Biotechnologie.
      Bahnbrechende Forschungsergebnisse zum Thema „Genome editing and animal hybride development
      with CRispR/CAS“ des Instituts für Angewandte Hundkatzenschweinerein um die Jahrundertwende,
      verhalfen der Biohacking Szene zum Durchbruch. Einer der ehemaligen Mitarbeiter des Instituts
      ist Martin Wächter. Er fasste kurz nach der Veröffentlichung der Forschungsergebnisse den
      Entschluss die Informationen aufzuarbeiten und der breiten Bevölkerung zur Verfügung zu
      stellen. So entstand der Verein Hybridliebhaber e.V., welcher seither im Mittelpunkt
      tierischer Hybridentwicklungen steht. Der Verein zählt zur Mitte diesen Jahres 5.830
      Mitglieder. 54% sind private Katzen- oder Hundehalter und ca. 37% lassen sich gewerblichen
      Agrarbetrieben zuordnen.
      <br />
      Die größten Aufgaben des Vereins liegen in der öffentlichen Aufklärungsarbeit, im Austausch
      zwischen privaten und gewerblichen Tierliebhabern und in der Standardisierung von tierischen
      Hybrid-Maker-Kits. Zusammen mit der „Hundkatzenschweinerei@Home GmbH“, einem 2016 gegründeten
      Berliner Unternehmen, entwickelt der Verein ein Maker-Kit zur Hybridisierung von Tieren.
      <br /><br />
      <b>Mammel Starter-Kit:</b> Das Mammel Starter-Kit eignet sich ausschließlich zur
      Hybridisierung kleiner Säugetiere (Hamstern, Meerschwein, Kaninchen, etc.).
<br />
      <b>Mammel Advanced-Kit:</b> Mit dem Mammel Advanced-Kit können größere Säugetiere hybridisiert
      werden (Schafe, Schweine, Tiger, Affen, etc.).
      <br />
      <b>Hybrid Pro:</b> Das Hybrid Pro ist das teuerste Set. Im Gegensatz zu den beiden anderen
      Kits, beschränkt es sich nicht auf die Hybridisierung von Säugetieren. Vögel, Fische, kleine
      und große Säugetiere können gekreuzt werden. 
      <br /><br />
        Das Unternehmen verspricht eine Erfolgsrate von 49%.
    </Typography>
  </CardTemplate>
);

export default withStyles(styles)(BioChemie);
