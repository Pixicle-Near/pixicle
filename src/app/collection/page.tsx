import Header from "@/components/_header";
import ImageHeader from "@/components/_imageHeader";
import { Stack } from "@chakra-ui/react";

function Collection() {
  return (
    <main>
      <Header />
      <Stack
        padding={["0.98rem 0.88rem", "0.98rem 0.88rem", "1.88rem 4.63rem"]}
      >
        <ImageHeader />
      </Stack>
      Collection
    </main>
  );
}

export default Collection;
