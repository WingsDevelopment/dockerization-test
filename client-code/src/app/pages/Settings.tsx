import React, { lazy, useEffect } from "react";
import { Card } from "../components/card/Card";
import { RPage } from "../components/Page/RPage";
import { RImage } from "../components/image/RImage";
import RBarChartExample from "../components/charts/RBarChartExample";
import RLineChart from "../components/charts/RLineChart";
import RPieChart from "../components/charts/RPieChart";
import { Div } from "../components/wrappers/Div";
import { Grid } from "@mui/material";
import { RGridContainer } from "../components/grid/RGridContainer";
import { RGridItem } from "../components/grid/RGridItem";

export const Settings = () => {
  // const [isFakeLoading, setIsFakeLoading] = React.useState(true);

  // useEffect(() => {
  //   //time out 100 ms
  //   setTimeout(() => {
  //     setIsFakeLoading(false);
  //   }, 100);
  // }, []);

  // if (isFakeLoading) return <>loading...</>;

  return (
    <RPage
      title="Settings"
      breadcrumbsLinks={[
        {
          name: "Home",
          href: "/home",
        },
        {
          name: "Test",
          href: "/test",
        },
      ]}
    >
      <RGridContainer gap={1}>
        <RGridItem lg={3} md={6}>
          <RImage src="https://source.unsplash.com/zG0_RnnxguY" alt="" />
        </RGridItem>
        <RGridItem lg={3} md={6}>
          <RImage src="https://source.unsplash.com/zG0_RnnxguY" alt="" />
        </RGridItem>
        <RGridItem lg={3} md={6}>
          <RImage src="https://source.unsplash.com/zG0_RnnxguY" alt="" />
        </RGridItem>
        <RGridItem lg={3} md={6}>
          <RImage src="https://source.unsplash.com/zG0_RnnxguY" alt="" />
        </RGridItem>
        <RGridItem md={6}>
          <RImage src="https://source.unsplash.com/zG0_RnnxguY" alt="" />
        </RGridItem>
        <RGridItem md={6}>
          <RImage
            className="image thumbnail"
            src="https://source.unsplash.com/zG0_RnnxguY"
            alt=""
          />
        </RGridItem>
        <RGridItem lg={6}>
          <RImage
            className="image thumbnail"
            src="https://source.unsplash.com/zG0_RnnxguY"
            alt=""
          />
        </RGridItem>
        <RGridItem lg={6}>
          <RImage
            className="image thumbnail"
            src="https://source.unsplash.com/zG0_RnnxguY"
            alt=""
          />
        </RGridItem>
      </RGridContainer>
      <RGridContainer gap={1}>
        <RGridItem sx={6}>
          <Card>my test</Card>
        </RGridItem>
        <RGridItem sx={6}>
          <Card>my test</Card>
        </RGridItem>
        <RGridItem sx={3}>
          <Card>my test</Card>
        </RGridItem>
        <RGridItem sx={9}>
          <Card>my test</Card>
        </RGridItem>
        <RGridItem sx={1}>
          <Card>my test</Card>
        </RGridItem>
        <RGridItem sx={1}>
          <Card>my test</Card>
        </RGridItem>
        <RGridItem sx={10}>
          <Card>my test</Card>
        </RGridItem>
      </RGridContainer>
      <hr />
      <hr />
      <RGridContainer gap={1}>
        <RGridItem sx={6}>
          <Card>
            <p>test1</p>
            <p>test1</p>
          </Card>
        </RGridItem>
        <RGridItem sx={6}>
          <Card>
            <RBarChartExample />
          </Card>
        </RGridItem>
        <RGridItem sx={6}>
          <Card>
            <RPieChart />
          </Card>
        </RGridItem>
        <RGridItem sx={6}>
          <Card>
            <RLineChart />
          </Card>
        </RGridItem>
        <RGridItem sx={6}>
          <Card>
            <RPieChart />
          </Card>
        </RGridItem>
        <RGridItem sx={6}>
          <Card>
            <RBarChartExample />
          </Card>
        </RGridItem>
        <RGridItem sx={6}>
          <Card>
            <RLineChart />
          </Card>
        </RGridItem>
        <RGridItem sx={6}>
          <Card>
            <RLineChart />
          </Card>
        </RGridItem>
        <RGridItem sx={6}>
          <Card>
            <RImage src="/images/rooms/room_5.jpg" alt="placeholder" />
          </Card>
        </RGridItem>
        <RGridItem sx={6}>
          <Card>
            <RImage src="/images/rooms/room_3.jpg" alt="placeholder" />
          </Card>
        </RGridItem>
        <RGridItem sx={6}>
          <Card>
            <RImage src="/images/rooms/room_2.jpg" alt="placeholder" />
          </Card>
        </RGridItem>
        <RGridItem sx={6}>
          <Card>
            <RImage src="/images/rooms/room_2.jpg" alt="placeholder" />
          </Card>
        </RGridItem>
        <RGridItem sx={6}>
          <Card>
            <RImage src="/images/rooms/room_2.jpg" alt="placeholder" />
          </Card>
        </RGridItem>
      </RGridContainer>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, tenetur
      earum! Optio amet ut sunt corrupti repellat aliquid. Beatae quis,
      provident mollitia neque aspernatur maxime inventore excepturi distinctio
      molestiae illum fuga dolorum pariatur ut magnam consectetur, harum
      repudiandae! Repudiandae, dolorum. Laboriosam ea, nobis dignissimos nisi
      facilis expedita cum! Commodi adipisci, laudantium aperiam, ab nemo quis
      quia debitis nobis numquam voluptatibus voluptates, odio amet sequi dolore
      assumenda rem repellat dolores molestias. Quae reiciendis quia doloremque
      voluptatem omnis eveniet iusto ut illo assumenda enim debitis pariatur
      ipsam odit labore excepturi explicabo corporis possimus quaerat laborum,
      qui error dignissimos nemo nisi. Alias quod odio dolores odit quo amet
      voluptatibus ea. Eligendi quisquam porro est similique error! Nobis qui
      molestiae assumenda voluptate. Magnam amet, quas rerum ipsa ipsam veniam
      facilis iste nihil? Ut quaerat, voluptatum, inventore fugiat magni
      consequatur beatae nemo culpa iure vero facere esse, non praesentium error
      dolore amet pariatur corporis corrupti animi repudiandae modi! Vitae
      nostrum quod corrupti natus quos fugit eum molestias, libero eius quaerat
      magnam hic facilis, accusamus possimus, aut soluta suscipit ducimus amet
      id iure. Consequuntur beatae reprehenderit neque corporis similique amet
      fugiat, animi unde placeat harum maiores quidem necessitatibus quis autem
      iure ducimus iste pariatur nulla distinctio voluptatibus iusto! Pariatur
      provident maxime assumenda atque eius vel totam adipisci cupiditate in!
      Repellendus deleniti vitae tenetur quisquam quam, fuga unde temporibus
      cupiditate possimus quidem ipsum dolorum sequi, molestias accusantium
      magnam, minima modi excepturi laudantium doloribus quos error quis dolores
      numquam obcaecati. Dolor nam maxime voluptate exercitationem nobis animi
      excepturi laborum. Inventore porro facilis pariatur commodi cumque cum
      accusamus delectus nihil incidunt illum iusto, dolores aspernatur officia
      corporis necessitatibus sint optio aut cupiditate voluptate voluptatem
      quae. Esse, beatae facere soluta amet non autem recusandae commodi
      eligendi aperiam natus sint? Facilis nam quas, illum culpa dolores iusto
      repudiandae facere aperiam consectetur praesentium id perferendis!
      Laudantium aperiam dignissimos cum voluptatibus fugit itaque cumque
      reprehenderit nisi! Quia iste dolor ullam! Repellat repudiandae facilis
      adipisci quam enim perspiciatis eius aspernatur quod nihil animi cumque
      unde harum similique maiores doloremque, nemo aut eveniet ut, deleniti
      velit nesciunt? Adipisci nemo iusto non. Voluptatem, accusantium.
      Voluptates illo tempora, nihil expedita non molestias debitis quaerat
      pariatur maiores cum minus architecto quasi, a distinctio sunt ipsam? Quis
      placeat neque laudantium! Est consectetur corrupti nam magni vero aliquid
      voluptatibus, iure voluptatem autem quos. Architecto quas, unde quia ad
      laborum, deleniti, in dolore sed rem sunt iusto. Hic sint unde earum enim
      ex totam accusamus repellendus iusto? Facere quasi aliquam obcaecati ipsum
      laboriosam nulla, molestiae temporibus iure sunt mollitia. Doloribus odio,
      repellat quis magnam amet similique asperiores debitis? Nulla deserunt quo
      amet perferendis laudantium repellendus, assumenda aperiam esse quisquam
      cumque nesciunt, in quae cupiditate necessitatibus voluptatibus
      perspiciatis maiores consectetur ad voluptates doloribus! Nemo inventore
      unde assumenda, quas ut molestias similique ad aliquid earum pariatur!
      Numquam iusto mollitia ducimus, laudantium obcaecati illo maxime aliquid
      praesentium? Molestias aut inventore dicta commodi obcaecati, ducimus
      laudantium officiis recusandae ad iusto odit quibusdam minima quia
      assumenda ipsam quod quidem? Asperiores praesentium necessitatibus, quod
      iure recusandae et deserunt aspernatur id quia, velit molestias beatae ut
      perferendis, pariatur sapiente libero? Asperiores vitae nisi adipisci
      aperiam obcaecati ducimus consequatur nostrum? Eos voluptas sed officia,
      maiores voluptatem eaque minus sapiente beatae quos ducimus esse
      dignissimos magnam inventore porro nisi earum quibusdam debitis explicabo
      ab illum dolore, alias culpa nulla! Ratione debitis nobis voluptates modi
      nesciunt. Eligendi sint atque repudiandae porro soluta rerum officiis vero
      architecto aliquid, et facere, tenetur beatae doloribus similique
      consequatur eveniet iste labore quidem excepturi nobis, saepe unde iusto
      incidunt earum. Unde magni voluptatem nulla, est dignissimos accusantium
      blanditiis voluptatibus aperiam odio obcaecati in quibusdam eum sint nisi.
      Commodi nemo numquam quidem sequi doloremque voluptas. Fugit eligendi,
      perferendis, doloribus iste aliquid et quisquam officia natus nesciunt
      atque quo dolorum consectetur eum recusandae est voluptatem omnis nemo
      beatae nihil in minus hic expedita tenetur. Nobis minima porro totam neque
      delectus suscipit sunt distinctio quibusdam dolor blanditiis, consequatur
      voluptatem cumque commodi aliquam vero iusto fuga quae? Eius laborum quo
      voluptatum debitis aperiam, fugiat atque deserunt beatae dicta hic,
      provident vero corporis enim omnis fugit. Tenetur eos iusto odit at veniam
      eaque enim autem, laboriosam molestias nisi quo ullam porro nesciunt
      perspiciatis excepturi. Impedit, nam quae! Est facere praesentium nihil
      tenetur beatae laborum nam molestiae blanditiis sed aliquid. In id labore
      eum molestiae dolores totam non ullam dolorum ex excepturi? Magnam,
      placeat! Quisquam repellat natus praesentium voluptatem ipsum
      exercitationem sint dignissimos aspernatur facilis quis voluptatum itaque
      quam corrupti, inventore necessitatibus eaque repellendus iure nulla,
      impedit ullam eum pariatur? Quod ratione in voluptates sed rerum ipsum
      laudantium animi! Aspernatur asperiores quia, reiciendis tempore amet
      facere ratione quod sequi veniam harum, hic eveniet illum quae earum
      minima. Dolores, ullam. Magni earum sint labore modi facilis? Qui, dolorem
      sapiente? Perspiciatis reprehenderit officia id totam, corrupti a nobis
      aliquam dignissimos repudiandae sed consequuntur pariatur, excepturi
      asperiores ipsam culpa voluptatum earum odit! Explicabo, aperiam dolore.
      Reprehenderit quo fuga accusamus minus nostrum hic tempora libero rem
      dolore, accusantium illum eos culpa voluptatibus id! Consequatur excepturi
      earum consectetur, a eaque optio tempore explicabo itaque accusantium id
      at ipsam veniam nam quasi quia veritatis temporibus iusto non! Consectetur
      sed deleniti commodi sit, deserunt rerum, iste eaque porro voluptatem, hic
      dolore ea iusto? Consequuntur tempora facilis dolore sunt inventore esse
      odit delectus, debitis perferendis nostrum autem doloribus facere,
      blanditiis eaque quibusdam quo ab nesciunt enim dolores natus ea itaque
      mollitia molestiae eius? Quod alias perferendis consequuntur deleniti
      provident et, omnis ipsam quaerat ducimus iure pariatur. Minima et
      delectus impedit cupiditate facere accusantium laborum inventore maxime
      minus vitae aspernatur ipsa nisi iusto nostrum tempora, esse, voluptatum
      numquam architecto ratione fuga provident. Asperiores ducimus voluptatem
      laborum cumque deleniti! Laborum, quidem nam autem nostrum tempore
      similique qui eligendi labore, eum perspiciatis, minima debitis eaque est
      quasi. Molestiae quidem reiciendis, ut velit architecto provident quas
      temporibus. Ullam, perferendis! Deserunt, distinctio accusantium animi
      harum libero excepturi earum quod quia. Id velit similique, provident quam
      accusamus, assumenda officiis alias tenetur dignissimos accusantium
      doloribus saepe. Consequatur libero cumque quae hic dolorum voluptas ipsam
      quam doloremque vitae!
    </RPage>
  );
};

export default Settings;
