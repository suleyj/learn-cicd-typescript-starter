import { IncomingHttpHeaders } from "http";
import { describe, expect, test } from "vitest";
import { getAPIKey } from "../api/auth";

const emptyHeader: IncomingHttpHeaders = {};

const multiStringHeader: IncomingHttpHeaders = {
  authorization: "hey aasda apikey 113322",
};

const singleStringHeader: IncomingHttpHeaders = {
  authorization: "ApiKey",
};

const noAPIStringHeader: IncomingHttpHeaders = {
  authorization: "Api abcdefg",
};

const invalidCaseHeader: IncomingHttpHeaders = {
  authorization: "Apikey abcdefg",
};

const goodHeader: IncomingHttpHeaders = {
  authorization: "ApiKey abcdefg",
};

describe("getAPIKey", () => {
  test("Empty header", () => {
    expect(getAPIKey(emptyHeader)).toBeNull();
  });

  test("Multiple strings in authorization", () => {
    expect(getAPIKey(multiStringHeader)).toBeNull();
  });

  test("Single string in authorization", () => {
    expect(getAPIKey(singleStringHeader)).toBeNull();
  });

  test("No ApiKey string in authorization", () => {
    expect(getAPIKey(noAPIStringHeader)).toBeNull();
  });

  test("Incorrect case for authorization", () => {
    expect(getAPIKey(invalidCaseHeader)).toBeNull();
  });

  test("Good format authorization", () => {
    expect(getAPIKey(goodHeader)).toBe("abcdefg");
  });
});
