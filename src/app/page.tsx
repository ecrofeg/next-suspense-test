'use client'

export const dynamic = "force-dynamic";

import { useBackgroundQuery, useReadQuery, useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";
import {gql} from "@apollo/client";
import {Suspense} from "react";

const missionNameQuery = gql`query {
    launchLatest {
        mission_name
    }
}`

const missionIdQuery = gql`query {
    launchLatest {
        mission_id
    }
}`

function MissionName({ queryRef }) {
  const {data} = useReadQuery(queryRef)

  return <div>{data?.launchLatest.mission_name}</div>;
}

function MissionId({ queryRef }) {
  const {data} = useSuspenseQuery(missionIdQuery)

  return <div>
    {data?.launchLatest.mission_id}

    <Suspense fallback={<div>Loading MissionName...</div>}>
      <MissionName queryRef={queryRef} />
    </Suspense>
  </div>;
}

export default function Home() {
  const [queryRef] = useBackgroundQuery(missionNameQuery);

  return <Suspense fallback={<div>Loading Home...</div>}>
    <MissionId queryRef={queryRef} />
  </Suspense>
}
