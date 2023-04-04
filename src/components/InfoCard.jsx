import {
  Card,
  CardBody,
  Image,
  Stack,
  Divider,
  CardFooter,
  ButtonGroup,
  Button,
  Heading,
  Text,
} from "@chakra-ui/react";
import { API_URL, PATH } from "@constants/path";
import { generatePath, Link } from "react-router-dom";

function InfoCard(props) {
  const { id, title, author, publisher, image } = props;

  return (
    <Link to={generatePath(PATH.detail, { id })}>
      <Card maxW="sm">
        <CardBody>
          <Image src={`${API_URL}/${image}`} alt={title} borderRadius="lg" />
          <Stack mt="6" spacing="3">
            <Heading size="md">{title}</Heading>
            <Text>{author}</Text>
            <Text>{publisher}</Text>
          </Stack>
        </CardBody>
      </Card>
    </Link>
  );
}

export default InfoCard;
