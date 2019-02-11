FROM rust:1.32

WORKDIR /usr/src/nova
COPY . .

RUN cargo build


CMD ["cargo", "run"]