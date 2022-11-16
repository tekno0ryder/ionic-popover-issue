import React from 'react';
import {IonButton, IonContent, IonPopover, setupIonicReact} from "@ionic/react";

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

setupIonicReact();

function App() {
    return (
        <div style={{marginTop: "90vh"}}>
            <IonButton id="click-trigger">Left-Click Me</IonButton>
            <IonPopover trigger="click-trigger" keepContentsMounted={false}>
                <IonContent class="ion-padding">
                    <p>Hello World! 1</p>
                    <p>Hello World! 2</p>
                    <p>Hello World! 3</p>
                </IonContent>
            </IonPopover>
        </div>
    );
}

export default App;
