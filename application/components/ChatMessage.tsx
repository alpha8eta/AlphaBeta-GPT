import { View, rcss, Text, tokens, LoadingIcon } from "node_modules";
import { MarkdownWrapper } from "./MarkdownWrapper";

export interface ChatMessageType {
  username: string;
  userImage: string;
  message: string;
  isPresenter: boolean;
  loading?: boolean;
}

export const ChatMessage = ({
  isPresenter,
  userImage,
  username,
  message,
  loading,
}: ChatMessageType) => {
  return (
    <View
      css={[
        rcss.flex.column,
        rcss.colWithGap(8),
        rcss.p(8),
        {
          background: isPresenter ? `#ebbf4625` : "transparent",
          borderTop: isPresenter ? `solid 1px ${tokens.yellowDefault}` : "none",
          borderBottom: isPresenter ? `solid 1px ${tokens.yellowDefault}` : "none",
        },
      ]}
    >
      <View css={[rcss.flex.row, rcss.rowWithGap(8), rcss.align.center]}>
        <img
          src={userImage}
          width={32}
          height={32}
          alt={username}
          style={{
            borderRadius: "50%",
            border: `solid 1px ${tokens.backgroundHigher}`,
          }}
        />
        <Text>{username}</Text>
      </View>
      {loading ? (
        <View css={[rcss.flex.row, rcss.rowWithGap(8)]}>
          <LoadingIcon />
          <Text>
            <MarkdownWrapper>{message}</MarkdownWrapper>
          </Text>
        </View>
      ) : (
        <Text multiline>
          <MarkdownWrapper>{message}</MarkdownWrapper>
        </Text>
      )}
    </View>
  );
};
