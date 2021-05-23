import React from "react";
import ReactDOM from "react-dom";
import {
  AdaptivityProvider,
  ConfigProvider,
  useAdaptivity,
  AppRoot,
  SplitLayout,
  SplitCol,
  ViewWidth,
  View,
  Panel,
  PanelHeader,
  Header,
  Group,
  SimpleCell
} from "@vkontakte/vkui";
import "@vkontakte/vkui/dist/vkui.css";
import "./css/main.css";
import bridge from '@vkontakte/vk-bridge';

bridge.send("VKWebAppInit", {});

const Example = () => {


  const { viewWidth } = useAdaptivity();
  return (
    <AppRoot>
      <SplitLayout header={<PanelHeader separator={false} shadow />}>
        <SplitCol spaced={viewWidth > ViewWidth.MOBILE}>
          <View activePanel="main">
            <Panel id="main">
             <PanelHeader>

              <h1>ITPandy</h1>

              </PanelHeader>
              <h1 class="title">Наша <span class="gold">команда</span></h1>

              <div class="wrapper">
                <div class="w-card">
                  <img src="img/nikita.jpg"></img>
                  <h1>Жиденко <br></br> Никита</h1>
                  <p><a>Fullstack разработчик</a>, просто весёлый паренёк</p>
                </div>


                <div class="w-card">
                  <img src="img/alex.jpg"></img>
                  <h1>Олейник <br></br> Алексей</h1>
                  <p><a>ML разработчик</a>, очень смешной человек</p>
                </div>

                <div class="w-card">
                  <img src="img/ivan.jpg"></img>
                  <h1>Кобец <br></br> Иван</h1>
                  <p><a>WEB разработчик</a>, также любит робототехнику</p>
                </div>

                <div class="w-card">
                  <img src="img/maks.jpg"></img>
                  <h1>Константинов <br></br> Максим</h1>
                  <p><a>GameDev разработчик</a>. Спокойный :)</p>
                </div>
              </div>

              <footer>
                <b>ITpandy | Team</b>
              </footer>

            </Panel>
          </View>
        </SplitCol>
      </SplitLayout>
    </AppRoot>
  );
};

ReactDOM.render(
  <ConfigProvider>
    <AdaptivityProvider>
      <Example />
    </AdaptivityProvider>
  </ConfigProvider>,
  document.getElementById("root")
);
