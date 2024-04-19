import { Box, VStack, Heading, Text, Image, HStack, Link } from "@chakra-ui/react";

const Index = () => {
  return (
    <Box bg="gray.100" textAlign="center" fontSize="xl">
      <VStack spacing={8} py={12}>
        {/* Header */}
        <Heading as="h1" size="2xl">
          Theodore Roosevelt
        </Heading>

        {/* Hero */}
        <Box>
          <Image w="2xl" src="https://images.unsplash.com/photo-1585066039857-a33b12c14f6c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx0aGVvZG9yZSUyMHJvb3NldmVsdCUyMHBvcnRyYWl0fGVufDB8fHx8MTcxMzU0ODI0OXww&ixlib=rb-4.0.3&q=80&w=1080" alt="Theodore Roosevelt" mx="auto" />
          <Text mt={6} mx="auto" maxW="3xl">
            Theodore Roosevelt Jr. (October 27, 1858 – January 6, 1919), often referred to as Teddy or by his initials, T. R., was an American politician, statesman, conservationist, naturalist, historian, and writer who served as the 26th president of the United States from 1901 to 1909.
          </Text>
        </Box>

        {/* Early Life */}
        <VStack spacing={4} maxW="2xl" mx="auto" textAlign="left">
          <Heading as="h2" size="xl">
            Early Life
          </Heading>
          <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce finibus urna lacus, ut lacinia nibh pretium vitae. Sed accumsan, sapien nec consectetur aliquam, tellus augue imperdiet lectus, nec volutpat quam diam quis risus.</Text>
        </VStack>

        {/* Political Career */}
        <VStack spacing={4} maxW="2xl" mx="auto" textAlign="left">
          <Heading as="h2" size="xl">
            Political Career
          </Heading>
          <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce finibus urna lacus, ut lacinia nibh pretium vitae. Sed accumsan, sapien nec consectetur aliquam, tellus augue imperdiet lectus, nec volutpat quam diam quis risus.</Text>
        </VStack>

        {/* Post-Presidency */}
        <VStack spacing={4} maxW="2xl" mx="auto" textAlign="left">
          <Heading as="h2" size="xl">
            Post-Presidency
          </Heading>
          <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce finibus urna lacus, ut lacinia nibh pretium vitae. Sed accumsan, sapien nec consectetur aliquam, tellus augue imperdiet lectus, nec volutpat quam diam quis risus.</Text>
        </VStack>
      </VStack>

      {/* Footer */}
      <Box as="footer" bg="gray.200" py={8}>
        <HStack justify="center" spacing={4}>
          <Link href="https://en.wikipedia.org/wiki/Theodore_Roosevelt">Wikipedia</Link>
          <Link href="https://www.whitehouse.gov/about-the-white-house/presidents/theodore-roosevelt/">Whitehouse.gov</Link>
          <Link href="https://www.nps.gov/thro/index.htm">Theodore Roosevelt National Park</Link>
        </HStack>
      </Box>
    </Box>
  );
};

export default Index;
