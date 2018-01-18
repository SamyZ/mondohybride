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

const Definition = ({ classes }) => (
  <CardTemplate headline="Hundkatzenschweinerein zusammengefasst">
    <Typography component="p" className={classes.paragraph}>
  Die Hybridisierung von Organismen, welche im Pflanzenbau bereits gängige Praxis ist, findet seit mehreren Jahren zunehmendes Interesse in der Zoologie und Haustierzucht. In nicht-institutionellem Rahmen gelingt es immer häufiger Hund und Katze zusammenzubringen und Hybride zu schaffen, die sonst nur in Kinderbüchern zu bewundern sind. Durch die liberale Gesetzgebung und unverhältnismäßig hohe Anzahl von Haustierhaltern, hat sich die do-it yourself-Biologie weltweit durchgesetzt. Nicht zuletzt aber durch die bahnbrechenden Erfolge einer lokalen Biohacking Szene hat sich Berlin zur Hochburg der Hundkatzenschweinerein entwickelt. Allein in diesem Jahr wurden in Berliner Tierheimen, bei Tierärzten, im Tierpark und im Zoo 1.241 tierische Hybride registriert. In digitalen Haustierportalen ist das Interesse an Hundkatzenschweinerein gigantisch – eine große Dunkelziffer lässt sich nur vermuten.
  </Typography>
   <Typography component="p" type="subheading" className={classes.subheading}>
      Hundkatzenschweinerei - Was ist das?
   </Typography>
<Typography component="p" className={classes.paragraph}>
  Eine Hundkatzenschweinerei ist das Ergebnis einer erfolgreichen Hybridisierung von Organismen
      mittels gezielter Genomveränderung durch biochemische Methoden wie Crispr/Cas, wenn sie in
      einem nicht-institutionellen Rahmen erfolgt. Der Begriff kommt aus der deutschen
      do-it-yourself Biologie oder Biohacking Szene. Er ist dabei sowohl humorvoll gemeint, aber
      deutet auch die ethischen Probleme an, die durch das Erzeugen gentechnisch veränderter Hybride
      aufgeworfen werden.
    </Typography>
  </CardTemplate>
);

export default withStyles(styles)(Definition);
