import React from 'react';

import './covid-19.scss';
import covid_icon from '../../assets/covid.jpg';
import protective_measure_icons from '../../assets/protective-measures.png';
import hand_sanitizer_icon from '../../assets/hand-sanitizer.png';
import mask_icon from '../../assets/protective-measures.png';
import social_distancing_icon from '../../assets/social-distancing.png';
import hand_shake_icon from '../../assets/hand-shake.png';

const Covid19 = () => {
  return (
    <div className="page-container" id="covid-19">
      <div className="billetterie_container">
        <div className="centered">
          <h1>COVID-19</h1>
        </div>
        <h2>LA SITUATION</h2>
        <div className="situation-explaination">
          <div className="explaination-text">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean suscipit lacinia diam. Pellentesque
              habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis nisi arcu, lobortis
              in purus id, vulputate luctus massa. Duis nulla lorem, facilisis vitae facilisis quis, fermentum et erat.
              In orci dui, porta quis diam eget, lacinia elementum odio. Vestibulum porttitor elit justo, nec convallis
              ante auctor sollicitudin. Quisque et risus ac risus mattis pharetra vel ultricies lacus. Nunc at quam
              varius, posuere risus sed, egestas risus.
            </p>
            <p>
              Aliquam nisi lorem, accumsan in est id, ultricies aliquet enim. Phasellus vel dapibus arcu, a imperdiet
              lacus. Pellentesque lorem lectus, sagittis feugiat scelerisque vel, scelerisque at mi. Vestibulum in
              lectus nec massa finibus ullamcorper non et massa. Donec lorem ante, convallis vitae neque pulvinar,
              vehicula vestibulum lacus. Quisque tempor lacus nisi, non consequat tortor laoreet vitae. Sed fermentum
              ultrices ante, a aliquet sapien laoreet sit amet. Morbi arcu libero, suscipit quis egestas sit amet,
              aliquam at ligula. Curabitur sit amet elit tortor. Ut nisl ligula, interdum vitae accumsan sit amet,
              ornare at odio. Duis feugiat ex feugiat lectus pharetra, quis mattis nibh feugiat. Etiam id mi urna.
              Mauris quis magna diam. Phasellus id felis vel nisl luctus efficitur at vel massa.
            </p>
            <p>
              Sed in volutpat urna, venenatis imperdiet odio. Cras augue nulla, tempus eu nulla vel, bibendum tincidunt
              sapien. Mauris congue in urna vitae ultrices. Phasellus luctus tristique orci vel vehicula. Ut molestie
              mauris id tempus ultrices. Aliquam quis nulla accumsan, fermentum ligula ac, egestas augue. Aliquam erat
              volutpat. Quisque accumsan sapien nisi, nec maximus velit pretium ut.
            </p>
          </div>
          <img className="explaination-image" src={covid_icon} />
        </div>
        <h2>LE PROTOCOLE</h2>
        <table>
          <tbody>
            <tr>
              <td className="hand-sanitizer">
                <div className="image-container-1">
                  <div className="image-container-2">
                    <img src={hand_sanitizer_icon} />
                  </div>
                </div>
                <h5>Gel hydroalcoolique</h5>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis officia quia iste nostrum magni
                  dolor ipsam libero quidem. Alias fuga harum mollitia repellat suscipit sint odit velit accusantium
                  rem. Quis.
                </p>
              </td>
              <td className="mask">
                <div className="image-container-1">
                  <div className="image-container-2">
                    <img src={mask_icon} />
                  </div>
                </div>
                <h5>Le masque</h5>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum debitis odio ullam molestias
                  odit. Rem nihil harum dolore corrupti voluptatem debitis exercitationem animi at doloribus velit,
                  accusantium culpa nesciunt error!
                </p>
              </td>
            </tr>
            <tr>
              <td className="social-distancing">
                <div className="image-container-1">
                  <div className="image-container-2">
                    <img src={social_distancing_icon} />
                  </div>
                </div>
                <h5>Distanciation sociale</h5>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum debitis odio ullam molestias
                  odit. Rem nihil harum dolore corrupti voluptatem debitis exercitationem animi at doloribus velit,
                  accusantium culpa nesciunt error!
                </p>
              </td>
              <td className="hand-shake">
                <div className="image-container-1">
                  <div className="image-container-2">
                    <img src={hand_shake_icon} />
                  </div>
                </div>
                <h5>Poignée de main</h5>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum debitis odio ullam molestias
                  odit. Rem nihil harum dolore corrupti voluptatem debitis exercitationem animi at doloribus velit,
                  accusantium culpa nesciunt error!
                </p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Covid19;
