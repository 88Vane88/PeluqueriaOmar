import { Wrapper, Status } from "@googlemaps/react-wrapper";

const render = (status) => {
  return <h1>{status}</h1>;
};

<Wrapper apiKey={"AIzaSyBOJk5bEuN5y1wUvmCSx83GhiJJVrPupbM"} render={render}>
  <YourComponent/>
</Wrapper>

/* export const Map = () => {
  return(
    <div className="md:basis-1/2">
          <iframe
            width="70%"
            height="400"
            id="gmap_pelu_omar"
            src="https://maps.google.com/maps?q=Avenida%20Ada%20Elflein%204045&t=&z=15&ie=UTF8&iwloc=&output=embed"
          ></iframe>
    </div>
  )
} */