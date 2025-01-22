import Image from "next/image";
import { useState, useEffect } from "react";
import { FaArrowRightLong, FaClock } from "react-icons/fa6";
import {
  Button,
  Box,
  Text,
  VStack,
  HStack,
  Container,
  Flex,
  ChakraProvider,
  useColorModeValue,
} from "@chakra-ui/react";

// Get the redirect URL from environment variables with a fallback
const REDIRECT_URL =
  process.env.NEXT_PUBLIC_REDIRECT_URL ?? "https://docs.hyperweb.io";

export function RedirectSplashPage({
  fallbackChildran,
}: {
  fallbackChildran: React.ReactNode;
}) {
  const [countdown, setCountdown] = useState(30);
  const [isCancelled, setIsCancelled] = useState(false);

  // Color mode values
  const bgColor = useColorModeValue("white", "gray.800");
  const borderColor = useColorModeValue("gray.200", "gray.700");
  const textColor = useColorModeValue("gray.600", "gray.400");
  const accentColor = useColorModeValue("#0066CC", "#3B82F6");
  const arrowColor = useColorModeValue("gray.700", "gray.400");

  const redirectToSite = () => {
    window.location.href = REDIRECT_URL;
  };

  useEffect(() => {
    if (isCancelled) return;

    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          redirectToSite();
          return 1;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [isCancelled]);

  const handleCancel = () => {
    setIsCancelled(true);
    setCountdown(0);
  };

  if (isCancelled) {
    return fallbackChildran;
  }

  return (
    <ChakraProvider>
      <Flex
        w="100%"
        h="50vh"
        align="center"
        justify="center"
        bg={bgColor}
        my={18}
      >
        <Container
          maxW="600px"
          py={12}
          px={8}
          display="flex"
          flexDirection="column"
          alignItems="center"
          bg={bgColor}
          boxShadow="lg"
          borderRadius="lg"
          borderWidth="1px"
          borderColor={borderColor}
        >
          <HStack spacing={6} pb={10}>
            <Image
              src="/brand/cosmology-darker.svg"
              alt="Cosmology"
              height={0}
              width={0}
              style={{ width: "45px", height: "45px" }}
            />
            <Box color={arrowColor}>
              <FaArrowRightLong size={24} />
            </Box>
            <Image
              src="/brand/hyperweb.svg"
              alt="Hyperweb"
              height={0}
              width={0}
              style={{ width: "45px", height: "45px" }}
            />
          </HStack>

          <Text
            fontSize={{ base: "2xl", md: "3xl" }}
            fontWeight="semibold"
            textAlign="center"
            mb={2}
          >
            Hyperweb Docs is the new home for Cosmology Zone Docs.
          </Text>

          <Text color={textColor} maxW="440px" fontSize="md" textAlign="center">
            Check out our new docs over at Hyperweb for existing products' docs
            and much more.
          </Text>

          <HStack spacing={6} mt={10} mb={8}>
            <Box color={accentColor}>
              <FaClock size={16} />
            </Box>
            <Text fontSize="md" fontWeight="medium" color={accentColor}>
              Redirecting to Hyperweb Docs in{" "}
              <Text as="span" fontSize="lg" fontWeight="semibold">
                {countdown}
              </Text>{" "}
              second{countdown === 1 ? "" : "s"}...
            </Text>
          </HStack>

          <Box px={10} w="full">
            <HStack spacing={4}>
              <Button
                size="sm"
                variant="outline"
                onClick={handleCancel}
                w="full"
                borderColor={accentColor}
                color={accentColor}
              >
                Stay here
              </Button>
              <Button
                size="sm"
                bg={accentColor}
                color="white"
                onClick={redirectToSite}
                w="full"
                _hover={{
                  bg: useColorModeValue("#0052A3", "#2563EB"),
                }}
              >
                Redirect now
              </Button>
            </HStack>
          </Box>
        </Container>
      </Flex>
    </ChakraProvider>
  );
}
